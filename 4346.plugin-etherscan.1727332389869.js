"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4346],{

/***/ 84346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("// SPDX-License-Identifier: GPL-3.0\n\npragma solidity >=0.7.0 <0.9.0;\nimport \"remix_tests.sol\";\nimport \"remix_accounts.sol\";\nimport \"../contracts/MyToken.sol\";\n\ncontract MyTokenTest {\n\n    MyToken s;\n\n    function beforeAll () public {\n        address acc0 = TestsAccounts.getAccount(0);\n        // acc0 will be set as initial owner\n        s = new MyToken(acc0);\n    }\n\n    function testSetURI () public {\n        string memory uri = \"https://testuri.io/token\";\n        s.setURI(uri);\n        Assert.equal(s.uri(1), uri, \"uri did not match\");\n    }\n}");

/***/ })

}]);
//# sourceMappingURL=4346.plugin-etherscan.1727332389869.js.map