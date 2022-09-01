const mongoose = require("mongoose");

// Named the database 'bootSocial'...we can change that if you guys want
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost:27017/bootSocialDB",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

module.exports = mongoose.connection;
