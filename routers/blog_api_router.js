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
// Hata Yönetimi
const handleError = (res, message) => {
  res.status(400).json({ error: message });
};

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
router.post("/", (request, response) => {
  try {
    // Verileri almak
    const { header, content, author, tags } = request.body;
    if (!header || !content || !author || !tags) {
      return handleError(res, "Tüm alanlar gereklidir!");
    }

    // Dikkat: db.json içindeki dizi adı : blogs
    // Veri tabanı
    let db = readDB();
    const newBlog = {
      id: db.blogs.length ? db.blogs[db.blogs.length - 1].id + 1 : 1,
      header,
      content,
      author,
      tags,
      createdAt: new Date().toISOString(),
    };

    db.blogs.push(newBlog);
    writeDB(db);

    res.status(201).json(newBlog);
  } catch (error) {
    handleError(res, "Blog ekleme işlemi başarısız!");
  }
});

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
