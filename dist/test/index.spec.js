"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var index_1 = __importDefault(require("../index"));
var imageProcessing_1 = __importDefault(require("../utilities/imageProcessing"));
var path_1 = __importDefault(require("path"));
var request = (0, supertest_1.default)(index_1.default);
describe("Testing the main route endpoint response", function () {
    it("response status: 200, display welcome page", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, request.get("/")];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2];
            }
        });
    }); });
});
describe("Testing the image route endpoint response", function () {
    it("Returns the resized image without errors if all parameters are set", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, request.get("/image?filename=fjord&width=200&height=200")];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2];
            }
        });
    }); });
    it("Returns 'image not found (404)' error when no parameters are set", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, request.get("/image")];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(404);
                    expect(response.text).toBe("<h3>Image not found,</h3> please check image name and try again");
                    return [2];
            }
        });
    }); });
    it("Returns 'image not found' error when the filename is not valid", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, request.get("/image?filename=test")];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(404);
                    expect(response.text).toBe("<h3>Image not found,</h3> please check image name and try again");
                    return [2];
            }
        });
    }); });
    it("Returns 'Width or height is not valid' error when width or height is not valid", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, request.get("/image?filename=fjord&width=500&height=test")];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(405);
                    expect(response.text).toBe("<h3>Width or hight is not valide,</h3> Please enter valid width and height");
                    return [2];
            }
        });
    }); });
    it("Displays the image without resizing", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, request.get("/image?filename=fjord")];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2];
            }
        });
    }); });
    it("Resizes the image without any errors", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, request.get("/image?filename=fjord&width=400&height=400")];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    expect(!fs_extra_1.default.ensureFile("../../assets/resized_images/fjord-400-400.jpg")).toBeFalse();
                    return [2];
            }
        });
    }); });
});
describe("Testing image processing", function () { return __awaiter(void 0, void 0, void 0, function () {
    var myImage, width, height;
    return __generator(this, function (_a) {
        myImage = path_1.default.join(__dirname, "../", "../", "/assets", "/images", "/fjord.jpg");
        width = 400;
        height = 400;
        it("create folder for resized images if not exists", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                expect(fs_extra_1.default.ensureDir("../../assets/resized_images"));
                return [2];
            });
        }); });
        it("The processing function works without errors", function () {
            expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, (0, imageProcessing_1.default)(myImage, width, height)];
                        case 1: return [4, _a.sent()];
                        case 2:
                            _a.sent();
                            return [2];
                    }
                });
            }); }).not.toThrow();
        });
        return [2];
    });
}); });
//# sourceMappingURL=index.spec.js.map