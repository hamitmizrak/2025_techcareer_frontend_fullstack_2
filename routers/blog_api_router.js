// Express Import
const express = require("express");

// Express Router
const router = express.Router();

// Express App
const app = express();

//
const fs = require("fs");

//
const path = require("path");

// JSON-SERVER(DB) yolunu göstermek
const dbFilePath = path.join(__dirname, "../db.json");

/////////////////////////////////////////////////////////////////////////////////////

// DRY (Don't Repeat Yourself) - Kendini Tekrar Etme
const handleError = (err, response, status, message) => {
  console.error("Error: ", err);
  response.status(status).json({ message });
}; //end handleError

/////////////////////////////////////////////////////////////////////////////////////
// JSON-SERVER(DB) VERI OKU
const readDB = () => {
  const data = fs.readFileSync(dbFilePath, "utf-8");
  return JSON.parse(data);
};

/////////////////////////////////////////////////////////////////////////////////////
// JSON-SERVER(DB) VERI YAZ
const writeDB = (data) => {
  fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2), "utf-8");
};

/////////////////////////////////////////////////////////////////////////////////////
// BLOG API (CREATE)
router.post("/", async (request, response) => {
  try {
    // Verileri almak
    const { header, content, author, tags } = request.body;
    if (!header || !content || !author || !tags) {
      return handleError(null, response, 400, "Eksik Bilgi Girişi");
      //response.status(400).json({message: "Eksik Bilgi Girişi"})
    }

    // Dikkat: db.json içindeki dizi adı : blogs
    // Veri tabanı
    const db = readDB();
    const newBlog = {
      id: db.blogs.length + 1,
      header,
      content,
      author,
      tags,
      dateInformation: new Date().toISOString(),
    }; // end newBlog

    //
    db.blogs.push(newBlog);
    writeDB(db);
    response.status(201).json(newBlog);
  } catch (err) {
    handleError(err, response, 500, "Blog Ekleme Başarısız");
  }
}); //end router.post

//////////////////////////////////////////////////////////////////////////////////////
// BLOG API (LIST)
router.get("/", async (request, response) => {
  try {
    const db = await readDB();
    response.status(200).json(db.blogs);

    // Ekleme Başarılı
    console.warn("Blog Listeme Başarılı", "blogs");
  } catch (err) {
    handleError(err, response, "Blog Listeleme Başarısız");
  } //end catch
}); //end router.get

//////////////////////////////////////////////////////////////////////////////////////
// BLOG API (FIND)
//////////////////////////////////////////////////////////////////////////////////////
// BLOG API (UPDATE)
//////////////////////////////////////////////////////////////////////////////////////
// BLOG API (DELETE)
//////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////
// EXPORT
module.exports = router;
