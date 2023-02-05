
module.exports = app => {
    const ranking = require("../controllers/ranking.controller");
  
    var router = require("express").Router();
  
    // Create a new ranking
    router.post("/", ranking.create);
  
    // Retrieve all ranking
    router.get("/", ranking.findAll);

     // Retrieve a rankings with a game id
    router.get("/game/:id", ranking.findRankingById);
  
    // Retrieve a single ranking with id
    router.get("/:id", ranking.findOne);
  
    // Update a ranking with id
    router.put("/:id", ranking.update);
  
    // Delete a ranking with id
    router.delete("/:id", ranking.delete);
  
    app.use("/api/ranking", router);
  }
  