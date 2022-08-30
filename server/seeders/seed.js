const db = require("../config/connection");
const { Post } = require("../models");
const postSeeds = require("./postSeeds.json");

db.once("open", async () => {
  await Post.deleteMany({});
  await Post.create(postSeeds);

  console.log("we gucci!");
  process.exit(0);
});
