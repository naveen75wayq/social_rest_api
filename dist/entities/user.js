"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class User {
    constructor(username, email, password) {
        this.userId = new mongodb_1.ObjectId().toHexString();
        this.username = username;
        this.email = email;
        this.password = password;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
exports.default = User;
