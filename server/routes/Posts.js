const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

router.get("/", async (req, res) => {
  const listOfPosts = await posts.findAll();
  res.json(listOfPosts);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Posts.crate(posts);
  res.json(post);
});

module.exports = router;
