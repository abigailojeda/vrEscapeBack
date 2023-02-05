const express = require("express");
const cors = require("cors"); 
require('dotenv').config();

const app = express();

let corsOptions = {
  origin: '*'
}

app.use(cors(corsOptions))

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");
// normal use. Doesn't delete the database data
// db.sequelize.sync();

// In development, you may need to drop existing tables and re-sync database
 db.sequelize.sync({ force: false }).then(() => {
   console.log("Drop and re-sync db.");
 });

//public directory
app.use(express.static('public'));

require("./routes/ranking.route")(app);
require("./routes/game.route")(app);
//require("./routes/user.route")(app);

//set port, listening for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});