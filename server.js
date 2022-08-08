const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config({ path: `./.env.${app.get("env")}` });
app.use(cors());
app.use(express.json());
app.use(require("./src/routes"));
app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
