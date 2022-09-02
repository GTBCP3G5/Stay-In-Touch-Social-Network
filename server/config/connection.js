const mongoose = require("mongoose");

// Named the database 'bootSocial'...we can change that if you guys want
mongoose.connect(
	process.env.MONGODB_URI ||
		"mongodb+srv://ericwittenstein:2SnHfy%40QK!SB8e4@cluster0.jpjowxc.mongodb.net/bootSocialDB?retryWrites=true&w=majority" ||
		"mongodb://localhost:27017/bootSocialDB",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

module.exports = mongoose.connection;
