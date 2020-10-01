import React, { useState } from "react";
import Styled from "styled-components";
import axios from "axios";

const Wrapper = Styled("div")`
  width: 100%;
`;

const Title = Styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  width: 100%;
  height: 80px;
  background: #55c500;
  color: #FFF;
  font-size: 33px;
  font-weight: bold;
`;

const SearchBox = Styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
`;

const SearchText = Styled("input")`
  width: 250px;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-size: 17px;
`;

const SearchButton = Styled("button")`
  width: 200px;
  height: 50px;
  margin-top: 30px;
  font-size: 20px;
  font-weight: 700;
  color: #FFF;
  border: none;
  border-radius: 5px;
  background: ${(props) => (props.disabled ? "#777" : "#55c500")};
  cursor: pointer;
  &:hover {
    background: ${(props) => (props.disabled ? "#777" : "#63e600")};
  }
`;

const Link = Styled("a")`
  height: 30px;
  margin-top: 15px;
  font-size: 20px;
  color: #FF8800;
`;

const FetchQiita = () => {
  const [searchText, setSearchText] = useState("");
  const [qiitaUrl, setQiitaUrl] = useState("");

  const inputSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const fetchQiitaArticle = () => {
    axios
      .get("https://qiita.com/api/v2/items", {
        params: {
          page: Math.floor(Math.random() * 10),
          per_page:  Math.floor(Math.random() * 10),
          query: `tag:${searchText}`,
        },
      })
      .then((response) => {
        const data = response.data[0];
        setQiitaUrl(data.url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <Title>『Qiita』ランダム取得</Title>
      <SearchBox>
        <SearchText
          onChange={inputSearchText}
          type="text"
          placeholder="検索したいワードを入力"
        />
        <SearchButton onClick={fetchQiitaArticle} disabled={searchText === ""}>
          検索
        </SearchButton>
        <Link href={qiitaUrl} target="_blank">
          {qiitaUrl}
        </Link>
      </SearchBox>
    </Wrapper>
  );
};

export default FetchQiita;
