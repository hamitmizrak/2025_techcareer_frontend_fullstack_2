// Express Import
const express = require("express");

// Express App
const app = express();

// Express Router
const router = express.Router();

/////////////////////////////////////////////////////////////////////////////////////

// DRY (Don't Repeat Yourself) - Kendini Tekrar Etme
const handleError = (err, response, message) => {
  console.error("Error: ", err);
  response.status(400).json({ message });
}; //end handleError

//////////////////////////////////////////////////////////////////////////////////////
// BLOG API (CREATE)
router.post("/", async (request, response) => {
  // Data
  const blogData = {
    header: request.body.header,
    content: request.body.content,
    author: request.body.author,
    tags: request.body.tags,
  };
  try {
    // Save
    const blog = await Blog.create(blogData);
    response.status(200).json(blog);

    // Ekleme Başarılı
    console.warn("Blog Ekleme Başarılı", blog);
  } catch (err) {
    handleError(err, response, "Blog Ekleme Başarısız");
  } //end catch
}); //end router.post

//////////////////////////////////////////////////////////////////////////////////////
// BLOG API (LIST)
router.get("/", async (request, response) => {
  try {
    const blogs = await Blog.find({});
    response.status(200).json(blogs);

    // Ekleme Başarılı
    console.warn("Blog Listeme Başarılı", blogs);
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
