"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class Post {
    constructor(userId, content) {
        this.postId = new mongodb_1.ObjectId().toHexString();
        this.userId = userId;
        this.content = content;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
exports.default = Post;
