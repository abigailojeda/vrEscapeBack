require('dotenv').config();

module.exports = {
  HOST: process.env.HOST || "localhost",
  USER: process.env.USER || "root",
  PASSWORD: process.env.PASSWORD || "",
  DB: process.env.DB || "vrescape_ranking",
  dialect: "mysql",

}
