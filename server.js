const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");

const app = express();

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to mongoDB via Mongoose

mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  console.log("Request accepted");
  res.send("Hello");
});

//Use Routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profile", profile);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
