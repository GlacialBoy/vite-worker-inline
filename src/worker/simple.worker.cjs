"use strict";

var getResult = require("./worker-impl.cjs");

console.log("Setting up worker")

/* eslint-env serviceworker */
var onMessage = function onMessage(_ref) {
    console.log('onMessage')
    const result = getResult()
    postMessage(result);
};

self.addEventListener('message', onMessage);