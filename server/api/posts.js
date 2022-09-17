const router = require("express").Router();
const {
  models: { Post },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.findAll();
    res.send(posts);
  } catch (e) {
    next(e);
  }
});
