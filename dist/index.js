"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var app = (0, express_1.default)();
var PORT = 3000;
app.use((0, morgan_1.default)("dev"));
var main_1 = __importDefault(require("./routes/main"));
app.use("/", main_1.default);
var image_1 = __importDefault(require("./routes/image"));
app.use("/image", image_1.default);
app.listen(PORT, function () {
    console.log("server is running on: http://localhost:".concat(PORT));
});
exports.default = app;
//# sourceMappingURL=index.js.map