"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes = express_1.default.Router();
routes.get("/", function (req, res) {
    res
        .status(200)
        .send("<h2>Welcome to Yassin's 'Image Processing' Api</h2> <h3>Example</h3><h4>[ To display the image ]:</h4><h5>http://localhost:3000/image?filename=imagename </h5> <h4>[ To display and resize the image ]:</h4> <h5>http://localhost:3000/image?filename=imagename&width=200&height=200</h5>");
});
exports.default = routes;
//# sourceMappingURL=main.js.map