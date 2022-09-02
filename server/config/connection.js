const mongoose = require("mongoose");

// Named the database 'bootSocial'...we can change that if you guys want
mongoose.connect(
	"mongodb+srv://ericwittenstein:2SnHfy%40QK!SB8e4@cluster0.jpjowxc.mongodb.net/bootSocialDB?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

module.exports = mongoose.connection;
