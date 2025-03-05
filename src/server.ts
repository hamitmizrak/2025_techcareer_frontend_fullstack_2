console.log("server.ts");
//////////////////////////////////////////////////
// Import

// dotenv
import dotenv from "dotenv";
dotenv.config();

// Express is a web application framework for Node.js
const express = require("express");

// Import the path module
const path = require("path");

// Create an Express application
const app = express();

// Port
const PORT=process.env.LOCALHOST_PORT || 1111;

// EJS Template Engine Kullanımı
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static Dosyalar (CSS,JS)
//app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));

// Anasayfa (httpİ://localhost:1111/)
app.get("/", (request:any, response:any) => {

 }); // End of app.get

// Define a route handler for the GET / route
app.get("/blog", (request:any, response:any) => {

    // blog.ejs
    // response.send("blog");
response.render("blog",{message: "Bu blog sayfasııdır"});
}); // End of app.get

// Sunucu start

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});