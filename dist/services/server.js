"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../config/env");
require("reflect-metadata");
var database_1 = __importDefault(require("../database"));
var App_1 = __importDefault(require("./App"));
database_1.default
    .then(function () {
    console.log("Connection DataBase Success");
    App_1.default.emit('ServerOn');
})
    .catch(function (err) { return console.log(err); });
App_1.default.on('ServerOn', function () {
    App_1.default.listen(process.env.PORT, function () {
        if (process.env.MODE == 'development') {
            console.log("http://localhost:" + process.env.PORT);
        }
    });
});
//# sourceMappingURL=server.js.map