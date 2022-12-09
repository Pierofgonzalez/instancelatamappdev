"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MONGODB_URI = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://PieroFigeri:Hacking951.,@cluster0.j58hkbc.mongodb.net/dataBaseTasks?retryWrites=true&w=majority";
exports.MONGODB_URI = MONGODB_URI;