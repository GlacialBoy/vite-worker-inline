"use strict";

var WorkerDef = require('./simple.worker.cjs')
var myWorker = new WorkerDef['default']()

var callWorker = function(input) {
    return new Promise( (resolve, reject) => {
        myWorker.onmessage = function(e) {
            resolve(e)
        }
        myWorker.postMessage(input);
    })
} 

module.exports = { callWorker:callWorker } 

