"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "PwaUpdater", {
  enumerable: true,
  get: function get() {
    return _PwaUpdater.default;
  }
});
Object.defineProperty(exports, "swRegister", {
  enumerable: true,
  get: function get() {
    return _swRegister.default;
  }
});

var _PwaUpdater = _interopRequireDefault(require("./components/PwaUpdater"));

var _swRegister = _interopRequireDefault(require("./sw/swRegister"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }