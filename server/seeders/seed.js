// import the database and the models
const db = require("../config/connection");
const { User, Post } = require("../models");

// import the seed files
const userSeeds = require("./userSeeds.json");
const postSeeds = require("./postSeeds.json");

db.once("open", async () => {
	// clean database of existing entries
  await User.deleteMany({});
  await Post.deleteMany({});

  // bulk create each model
  const users = await User.insertMany(userSeeds);
	const posts = await Post.insertMany(postSeeds);

	console.log("we gucci!");
	process.exit(0);
});
