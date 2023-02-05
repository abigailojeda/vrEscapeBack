const db = require("../models");
const Ranking = db.ranking;
const Op = db.Sequelize.Op;

// Create and Save a new Ranking
exports.create = (req, res) => {
    // Validate request
    
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Ranking
    const ranking = {
        id: req.body.id,
        gameId: req.body.gameId,
        time: req.body.time,
        username: req.body.username
    };

    // Save Ranking in the database
    Ranking.create(ranking)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Ranking."
            });
        });
};

// Retrieve all Ranking from the database.
exports.findAll = (req, res) => {
    Ranking.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Rankings."
            });
        });
};

// Retrieve an user Ranking from a specific game.
exports.findRankingById = (req, res) => {
    const id = req.params.id;

    Ranking.findAll({ where: { gameId: id } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Rankings."
            });
        });
};

// Find a single Ranking with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Ranking.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Ranking with id=" + id
            });
        });
};

// Update a Ranking by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
console.log(req.params)
    Ranking.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Ranking was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Ranking with id=${id}. Maybe Ranking was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Ranking with id=" + id
            });
        });
};

// Delete a Ranking with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Ranking.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Ranking was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Ranking with id=${id}. Maybe Ranking was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Ranking with id=" + id
            });
        });
};