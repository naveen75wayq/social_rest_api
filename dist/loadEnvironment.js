"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLOUD_API_SECRET = exports.CLOUD_API = exports.CLOUD_NAME = exports.ATLAS_PASS = exports.PORT = exports.envPath = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
exports.envPath = path_1.default.resolve('src/.env');
dotenv_1.default.config({ path: exports.envPath });
exports.PORT = process.env.PORT;
exports.ATLAS_PASS = process.env.ATLAS_PASS;
exports.CLOUD_NAME = process.env.CLOUD_NAME;
exports.CLOUD_API = process.env.CLOUD_API;
exports.CLOUD_API_SECRET = process.env.CLOUD_API_SECRET;
