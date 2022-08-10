const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const contactRoute = require("./routes/contact");
const addressRoute = require("./routes/address");
const categoryRoute = require("./routes/categories");
const backgroundRoute = require("./routes/background");
const multer = require("multer");
const path = require("path");

// const DB_URL = "mongodb://localhost:27017/blog1";

// const PORT=process.env.PORT ||5000;
dotenv.config();

const DB_URL =process.env.MONGO_URL ;
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/contact", contactRoute);
app.use("/api/address", addressRoute);
app.use("/api/background", backgroundRoute);


app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(process.env.PORT ||5000, () => {
  console.log("Backend is running.");
});
