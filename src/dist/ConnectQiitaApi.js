"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
var styled_components_1 = require("styled-components");
var Wrapper = styled_components_1["default"]("div")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\twidth: 100%;\n\theight: 50px;\n\tfont-size: 15px;\n"], ["\n\twidth: 100%;\n\theight: 50px;\n\tfont-size: 15px;\n"])));
var ConnectQiitaApi = function () {
    var _a = react_1.useState(""), searchText = _a[0], setSearchText = _a[1];
    var fetchQiitaArticle = function () {
        console.log(111);
        axios_1["default"]
            .get("https://qiita.com/api/v2/items", {
            params: {
                page: "1",
                per_page: "1",
                query: searchText
            }
        })
            .then(function (response) {
            console.log(response);
            var data = response.data[0];
            setSearchText(data.url);
        })["catch"](function (error) {
            console.log(error);
        });
    };
    return react_1["default"].createElement(Wrapper, null, fetchQiitaArticle);
};
exports["default"] = ConnectQiitaApi;
var templateObject_1;
