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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var ResourceManager = /** @class */ (function () {
    function ResourceManager() {
        this.resources = [];
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    // Method to add a new resource
    ResourceManager.prototype.addResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var name, description, location;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUserInput('Enter resource name: ')];
                    case 1:
                        name = _a.sent();
                        return [4 /*yield*/, this.getUserInput('Enter resource description: ')];
                    case 2:
                        description = _a.sent();
                        return [4 /*yield*/, this.getUserInput('Enter resource location: ')];
                    case 3:
                        location = _a.sent();
                        this.resources.push({ name: name, description: description, location: location });
                        console.log('Resource added successfully!');
                        return [2 /*return*/];
                }
            });
        });
    };
    // Method to search for resources by name
    ResourceManager.prototype.searchByName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var name, searchResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUserInput('Enter resource name to search: ')];
                    case 1:
                        name = _a.sent();
                        searchResults = this.resources.filter(function (resource) { return resource.name.toLowerCase().includes(name.toLowerCase()); });
                        if (searchResults.length > 0) {
                            console.log('Search Results:');
                            searchResults.forEach(function (resource) { return console.log(resource); });
                        }
                        else {
                            console.log('No resources found with that name.');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // Method to view all resources
    ResourceManager.prototype.viewAllResources = function () {
        if (this.resources.length > 0) {
            console.log('All Resources:');
            this.resources.forEach(function (resource) { return console.log(resource); });
        }
        else {
            console.log('No resources available.');
        }
    };
    // Public method to wrap the askQuestion method
    ResourceManager.prototype.getUserInput = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.rl.question(query, resolve);
                    })];
            });
        });
    };
    // Method to close the readline interface
    ResourceManager.prototype.close = function () {
        this.rl.close();
    };
    return ResourceManager;
}());
// Example usage
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var resourceManager, choice, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    resourceManager = new ResourceManager();
                    _b.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 11];
                    console.log('\nMenu:');
                    console.log('1. Add Resource');
                    console.log('2. Search Resource by Name');
                    console.log('3. View All Resources');
                    console.log('4. Exit');
                    return [4 /*yield*/, resourceManager.getUserInput('Enter your choice: ')];
                case 2:
                    choice = _b.sent();
                    _a = choice;
                    switch (_a) {
                        case '1': return [3 /*break*/, 3];
                        case '2': return [3 /*break*/, 5];
                        case '3': return [3 /*break*/, 7];
                        case '4': return [3 /*break*/, 8];
                    }
                    return [3 /*break*/, 9];
                case 3: return [4 /*yield*/, resourceManager.addResource()];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 10];
                case 5: return [4 /*yield*/, resourceManager.searchByName()];
                case 6:
                    _b.sent();
                    return [3 /*break*/, 10];
                case 7:
                    resourceManager.viewAllResources();
                    return [3 /*break*/, 10];
                case 8:
                    resourceManager.close();
                    return [2 /*return*/];
                case 9:
                    console.log('Invalid choice. Please try again.');
                    _b.label = 10;
                case 10: return [3 /*break*/, 1];
                case 11: return [2 /*return*/];
            }
        });
    });
}
main();
