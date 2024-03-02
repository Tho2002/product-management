const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const database = require("./config/database");
const systemConfig = require("./config/system");
const route = require("./routes/client/index.route");
const routeAdmin = require("./routes/admin/index.route");
database.connect();

app.set("views", "./views");
app.set("view engine", "pug");

// App locals variable
app.locals.prefixAdmin = systemConfig.prefixAdmin;
app.use(express.static("public"));
//Routes
route(app);
routeAdmin(app);
app.listen(port, () => {
  console.log(`đã kết nối ${port}`);
});
