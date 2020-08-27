"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var morgan_1 = __importDefault(require("morgan"));
var body_parser_1 = require("body-parser");
var cors_1 = __importDefault(require("cors"));
var path_1 = require("path");
var index_1 = __importDefault(require("../routes/index"));
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.middeware();
        this.routes();
    }
    App.prototype.middeware = function () {
        this.app.use(helmet_1.default());
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default({ origin: '' }));
        this.app.use(body_parser_1.urlencoded({ extended: true }));
        this.app.use(body_parser_1.json());
        this.app.use('/uploads', express_1.default.static(path_1.resolve(__dirname, '..', '..', 'uploads')));
    };
    App.prototype.routes = function () {
        this.app.use(index_1.default);
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=App.js.map