"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasks = require("../controllers/tasks.controllers");

var router = (0, _express.Router)(); // Render all tasks

router.get("/", _tasks.renderTasks);
router.post("/tasks/add", _tasks.createTask);
router.get("/tasks/:id/toggleDone", _tasks.taskToggleDone);
router.get("/tasks/:id/edit", _tasks.renderTaskEdit);
router.post("/tasks/:id/edit", _tasks.editTask);
router.get("/tasks/:id/delete", _tasks.deleteTask);
var _default = router;
exports["default"] = _default;