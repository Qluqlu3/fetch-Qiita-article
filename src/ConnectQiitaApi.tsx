import React, { useState } from "react";
import axios from "axios";
import Styled from "styled-components";

const Wrapper = Styled("div")`
	width: 100%;
	height: 50px;
	font-size: 15px;
`;

const ConnectQiitaApi = () => {
  const [searchText, setSearchText] = useState("");
  const fetchQiitaArticle = () => {
    console.log(111);
    axios
      .get("https://qiita.com/api/v2/items", {
        params: {
          page: "1",
          per_page: "1",
          query: searchText,
        },
      })
      .then((response) => {
        console.log(response);
        const data = response.data[0];
        setSearchText(data.url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return <Wrapper>{fetchQiitaArticle}</Wrapper>;
};
export default ConnectQiitaApi;
