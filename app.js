const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const productRoute = require("./routes/product");

const app = express();

const main = async () => {
	//middleware
	app.use(express.json());

	// connect to db
	await mongoose.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	// routes
	app.use(productRoute);
	if (process.env.NODE_ENV === "production") {
		app.use(express.static("client/build"));

		app.get("*", (req, res) => {
			res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
		});
	}

	// catching errors
	app.use((err, req, res, next) => {
		res.json({ error: true, msg: err.message });
	});

	// starting the server
	const PORT = process.env.PORT || 5000;
	app.listen(PORT, () => {
		console.log(`Server has started on port ${PORT}`);
	});
};

main().catch((err) => console.log(err));
