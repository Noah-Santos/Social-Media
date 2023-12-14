const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config({ path: __dirname + `/.env` });
const connectDB = require("./db/connect");
const postRoute = require("./routes/postController");
const userRoute = require("./routes/userController");
const port = 5000;

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	res.send("server is working");
});
app.use("/posts", postRoute);
app.use("/users", userRoute);

const initServer = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () => {
			console.log(`Listening on port ${port}`);
		});
	} catch (err) {
		console.log(err);
	}
};
initServer();
