const express = require("express");
const app = express();

app.use(express.json());
const db = require("./models");

// ROUTERS

const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("server running on port 3001");
  });
});
