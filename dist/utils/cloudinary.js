"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = __importDefault(require("cloudinary"));
const loadEnvironment_1 = require("../loadEnvironment");
exports.default = cloudinary_1.default.v2.config({
    cloud_name: loadEnvironment_1.CLOUD_NAME,
    cloud_api: loadEnvironment_1.CLOUD_API,
    api_secret: loadEnvironment_1.CLOUD_API_SECRET
});
