"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var TasckController_1 = __importDefault(require("../controllers/TasckController"));
var router = express_1.Router();
router.get('/', TasckController_1.default.index);
router.get('/:filter?', TasckController_1.default.show);
router.post('/', TasckController_1.default.store);
router.put('/:id', TasckController_1.default.update);
router.delete('/:id', TasckController_1.default.delete);
exports.default = router;
//# sourceMappingURL=task.routes.js.map