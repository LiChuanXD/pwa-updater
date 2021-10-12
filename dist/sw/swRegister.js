"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const onUpdate = registration => {
  const event = new CustomEvent("updateServiceWorker", {
    detail: {
      waiting: true,
      registration
    }
  });
  document.dispatchEvent(event);
};

const onSuccess = () => console.log("SERVICE WORKER UPDATED");

const swRegister = {
  onUpdate,
  onSuccess
};
var _default = swRegister;
exports.default = _default;