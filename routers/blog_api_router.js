// Express Import
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// JSON-SERVER(DB) yolunu göstermek
const dbFilePath = path.join(__dirname, "../db.json");

// Hata Yönetimi Fonksiyonu
const handleError = (res, message) => {
  return res.status(400).json({ error: message });
};

// JSON-SERVER(DB) VERİ OKUMA
const readDB = () => {
  try {
    const data = fs.readFileSync(dbFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return { blogs: [] };
  }
};

// JSON-SERVER(DB) VERİ YAZMA
const writeDB = (data) => {
  try {
    fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Veri yazma hatası:", error);
  }
};

// BLOG OLUŞTURMA (CREATE)
router.post("/", (req, res) => {
  try {
    const { header, content, author, tags } = req.body;
    if (!header || !content || !author || !tags) {
      return handleError(res, "Tüm alanlar gereklidir!");
    }

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

// TÜM BLOGLARI LİSTELEME (READ)
router.get("/", (req, res) => {
  try {
    const db = readDB();
    res.status(200).json(db.blogs);
  } catch (error) {
    handleError(res, "Blog listeleme başarısız");
  }
});

// TEK BİR BLOG GETİRME (READ)
router.get("/:id", (req, res) => {
  try {
    const db = readDB();
    const blog = db.blogs.find((b) => b.id === parseInt(req.params.id));
    if (!blog) return handleError(res, "Blog bulunamadı!");
    res.status(200).json(blog);
  } catch (error) {
    handleError(res, "Blog getirme başarısız");
  }
});

// BLOG GÜNCELLEME (UPDATE)
router.put("/:id", (req, res) => {
  try {
    let db = readDB();
    const blogIndex = db.blogs.findIndex(
      (b) => b.id === parseInt(req.params.id)
    );
    if (blogIndex === -1) return handleError(res, "Blog bulunamadı!");

    db.blogs[blogIndex] = { ...db.blogs[blogIndex], ...req.body };
    writeDB(db);
    res.status(200).json(db.blogs[blogIndex]);
  } catch (error) {
    handleError(res, "Blog güncelleme başarısız!");
  }
});

// BLOG SİLME (DELETE)
router.delete("/:id", (req, res) => {
  try {
    let db = readDB();
    const newBlogs = db.blogs.filter((b) => b.id !== parseInt(req.params.id));
    if (db.blogs.length === newBlogs.length)
      return handleError(res, "Blog bulunamadı!");

    db.blogs = newBlogs;
    writeDB(db);
    res.status(200).json({ message: "Blog başarıyla silindi." });
  } catch (error) {
    handleError(res, "Blog silme başarısız!");
  }
});

module.exports = router;
