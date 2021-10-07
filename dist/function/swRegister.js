"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const onUpdate = reg => console.log("ON UPDATE", reg);

const onSuccess = () => console.log("SERVICE WORKER UPDATE SUCCESS");

const swRegister = {
  onUpdate,
  onSuccess
};
var _default = swRegister;
exports.default = _default;