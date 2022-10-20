"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var routes = express_1.default.Router();
routes.get("/", function (req, res) {
    res.status(200).sendFile(path_1.default.join(__dirname, "../../main.html"));
});
exports.default = routes;
//# sourceMappingURL=main.js.map