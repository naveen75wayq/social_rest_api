"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class Comment {
    constructor(postId, userId, content) {
        this.commentId = new mongodb_1.ObjectId().toHexString();
        this.postId = postId;
        this.userId = userId;
        this.content = content;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
exports.default = Comment;
