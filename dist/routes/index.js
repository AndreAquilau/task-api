"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var task_routes_1 = __importDefault(require("./task.routes"));
var router = express_1.Router();
router.get('/', function (req, res) {
    return res.status(200).json({
        data: 'hello world API APP Task',
    });
});
router.use('/task', task_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map