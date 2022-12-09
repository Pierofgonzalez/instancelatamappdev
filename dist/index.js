"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

require("./utils/mongoose");

var bodyParser = require('body-parser');

_app["default"].use(bodyParser.json());

_app["default"].use(bodyParser.urlencoded({
  extended: true
}));

_app["default"].listen(_app["default"].get("port"));

console.log("server on port ".concat(_app["default"].get("port")));