const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const route = require("./routes/client/index.route");

app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));
//Routes
route(app);

app.listen(port, () => {
  console.log(`đã kết nối ${port}`);
});
