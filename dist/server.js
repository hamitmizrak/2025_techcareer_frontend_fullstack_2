"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("server.ts");
// Import
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Express is a web application framework for Node.js
const express = require("express");
// Create an Express application
const app = express();
// Define a route handler for the GET / route
app.get("/blog", (request, response) => {
    response.send("Blog Sayfası!");
}); // End of app.get
// Sunucu start
const PORT = process.env.LOCALHOST_PORT || 1111;
app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
});
