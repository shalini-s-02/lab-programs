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
// Create readline interface
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Function to calculate the average mark of a student
function calculateAverageMark(marks) {
    var studentMarks = marks.marks;
    var totalMarks = studentMarks.reduce(function (total, mark) { return total + mark; }, 0);
    return totalMarks / studentMarks.length;
}
// Function to calculate the class average mark
function calculateClassAverageMarks(students) {
    var totalMarks = students.reduce(function (total, marks) {
        return total + calculateAverageMark(marks);
    }, 0);
    return totalMarks / students.length;
}
// Function to get user input for student's marks
function getStudentMarks() {
    return new Promise(function (resolve) {
        rl.question('Enter student name: ', function (name) {
            var marks = [];
            var getMark = function (i) {
                if (i < 5) {
                    rl.question("Enter mark ".concat(i + 1, ": "), function (mark) {
                        marks.push(parseFloat(mark));
                        getMark(i + 1);
                    });
                }
                else {
                    resolve({ name: name, marks: marks });
                }
            };
            getMark(0);
        });
    });
}
// Get student marks until the user decides to stop
function getStudentsMarks() {
    return __awaiter(this, void 0, void 0, function () {
        var studentsMarks, continueInput, studentMarks, userInput;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    studentsMarks = [];
                    continueInput = true;
                    _a.label = 1;
                case 1:
                    if (!continueInput) return [3 /*break*/, 4];
                    return [4 /*yield*/, getStudentMarks()];
                case 2:
                    studentMarks = _a.sent();
                    studentsMarks.push(studentMarks);
                    return [4 /*yield*/, new Promise(function (resolve) {
                            rl.question('Do you want to enter marks for another student? (yes/no): ', resolve);
                        })];
                case 3:
                    userInput = _a.sent();
                    continueInput = userInput.toLowerCase() === 'yes';
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, studentsMarks];
            }
        });
    });
}
// Main function to execute the program
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var studentsMarks;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getStudentsMarks()];
                case 1:
                    studentsMarks = _a.sent();
                    // Calculate average mark for each student
                    console.log("Average marks for each student:");
                    studentsMarks.forEach(function (studentMarks, index) {
                        console.log("Student ".concat(index + 1, ":"), calculateAverageMark(studentMarks));
                    });
                    // Calculate class average mark
                    console.log("\nClass average mark:", calculateClassAverageMarks(studentsMarks));
                    // Close readline interface
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
// Execute main function
main();
