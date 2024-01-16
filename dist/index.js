"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("./server/db"));
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
function fun() {
    (0, db_1.default)('SOCIAL_DB');
}
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
fun();
