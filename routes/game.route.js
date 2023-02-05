
module.exports = app => {
    const game = require("../controllers/game.controller");
  
    var router = require("express").Router();
  
    // Create a new game
    router.post("/", game.create);
  
    // Retrieve all game
    router.get("/", game.findAll);
  
    // Retrieve a single game with id
    router.get("/:id", game.findOne);
  
    // Update a game with id
    router.put("/:id", game.update);
  
    // Delete a game with id
    router.delete("/:id", game.delete);
  
    app.use("/api/game", router);
  }
  