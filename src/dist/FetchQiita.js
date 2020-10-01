"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var axios_1 = require("axios");
var Wrapper = styled_components_1["default"]("div")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var Title = styled_components_1["default"]("div")(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding-left: 20px;\n  width: 100%;\n  height: 80px;\n  background: #55c500;\n  color: #FFF;\n  font-size: 33px;\n  font-weight: bold;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding-left: 20px;\n  width: 100%;\n  height: 80px;\n  background: #55c500;\n  color: #FFF;\n  font-size: 33px;\n  font-weight: bold;\n"])));
var SearchBox = styled_components_1["default"]("div")(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 250px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 250px;\n"])));
var SearchText = styled_components_1["default"]("input")(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 250px;\n  height: 40px;\n  border: none;\n  border-radius: 5px;\n  font-size: 17px;\n"], ["\n  width: 250px;\n  height: 40px;\n  border: none;\n  border-radius: 5px;\n  font-size: 17px;\n"])));
var SearchButton = styled_components_1["default"]("button")(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 200px;\n  height: 50px;\n  margin-top: 30px;\n  font-size: 20px;\n  font-weight: 700;\n  color: #FFF;\n  border: none;\n  border-radius: 5px;\n  background: ", ";\n  cursor: pointer;\n  &:hover {\n    background: ", ";\n  }\n"], ["\n  width: 200px;\n  height: 50px;\n  margin-top: 30px;\n  font-size: 20px;\n  font-weight: 700;\n  color: #FFF;\n  border: none;\n  border-radius: 5px;\n  background: ", ";\n  cursor: pointer;\n  &:hover {\n    background: ", ";\n  }\n"])), function (props) { return (props.disabled ? "#777" : "#55c500"); }, function (props) { return (props.disabled ? "#777" : "#63e600"); });
var Link = styled_components_1["default"]("a")(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: 30px;\n  margin-top: 15px;\n  font-size: 20px;\n  color: #FF8800;\n"], ["\n  height: 30px;\n  margin-top: 15px;\n  font-size: 20px;\n  color: #FF8800;\n"])));
var FetchQiita = function () {
    var _a = react_1.useState(""), searchText = _a[0], setSearchText = _a[1];
    var _b = react_1.useState(""), qiitaUrl = _b[0], setQiitaUrl = _b[1];
    var inputSearchText = function (event) {
        setSearchText(event.target.value);
    };
    var fetchQiitaArticle = function () {
        axios_1["default"]
            .get("https://qiita.com/api/v2/items", {
            params: {
                page: Math.floor(Math.random() * 10),
                per_page: Math.floor(Math.random() * 10),
                query: "tag:" + searchText
            }
        })
            .then(function (response) {
            var data = response.data[0];
            setQiitaUrl(data.url);
        })["catch"](function (error) {
            console.log(error);
        });
    };
    return (react_1["default"].createElement(Wrapper, null,
        react_1["default"].createElement(Title, null, "\u300EQiita\u300F\u30E9\u30F3\u30C0\u30E0\u53D6\u5F97"),
        react_1["default"].createElement(SearchBox, null,
            react_1["default"].createElement(SearchText, { onChange: inputSearchText, type: "text", placeholder: "\u691C\u7D22\u3057\u305F\u3044\u30EF\u30FC\u30C9\u3092\u5165\u529B" }),
            react_1["default"].createElement(SearchButton, { onClick: fetchQiitaArticle, disabled: searchText === "" }, "\u691C\u7D22"),
            react_1["default"].createElement(Link, { href: qiitaUrl, target: "_blank" }, qiitaUrl))));
};
exports["default"] = FetchQiita;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
