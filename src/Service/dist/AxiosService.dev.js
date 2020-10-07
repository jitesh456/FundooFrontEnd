"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AxiosService;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function AxiosService() {}

AxiosService.prototype.post = function (url, data) {
  var isHeader = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var Header = arguments.length > 3 ? arguments[3] : undefined;
  return _axios["default"].post(url, data, isHeader && Header);
};

AxiosService.prototype.get = function (url) {
  var isHeader = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var Header = arguments.length > 2 ? arguments[2] : undefined;
  return _axios["default"].get(url, isHeader && Header);
};

AxiosService.prototype["delete"] = function (url) {
  var isHeader = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var Header = arguments.length > 2 ? arguments[2] : undefined;
  return _axios["default"]["delete"](url, isHeader && Header);
};

AxiosService.prototype.put = function (url, data) {
  var isHeader = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var Header = arguments.length > 3 ? arguments[3] : undefined;
  return _axios["default"].put(url, data, isHeader && Header);
};