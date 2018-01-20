// ===== API CONTROLLER ======
/* 
    This controllers and manages all API
    calls to the server. Each section will
    serve up the relevant data from the database
    as JSON.
 */
// Requires
const db = require('../models');

// Exports
module.exports = {
    // Drinks API
    getAllDrinks: (req, res) => {
        db.drinks.findAll({}).then((drinks) => {
            if(!drinks.length === 0){
                res.status(404).end();
            }
            console.log(drinks);
            res.json(drinks);
        });
    },
    getDrink: (req, res) => {
        db.drinks.findOne({
            where: {
                id: req.params.id
            }
        }).then((drink) => {
            if(!drink === 0){
                res.status(404).end();
            }
            console.log(drink);
            res.json(drink);
        });
    },
    newDrink: (req, res) => {
        db.drinks.create({
            drink_name: req.body.name,
            description: req.body.description,
            image_link: req.body.imageLink
        }).then((results) => {
            res.json(results);
        });
    },
    editDrink: (req, res) => {
        db.drinks.update({
            drink_name: req.body.name,
            description: req.body.description,
            image_link: req.body.imageLink
        },{
            where:{
                id: req.params.id
            }
        }).then((results) => {
            res.json(results);
        });
    },
    deleteDrink: (req, res) => {
        db.drinks.destroy({
            where: {
                id: req.params.id
            }
        }).then((results)=> {
            res.json(results);
        });
    },
    // Comments API
    getAllComments: (req, res) => {
        db.comments.findAll({}).then((comments) =>{
            if(!comments){
                res.status(404).end();
            }
            console.log(comments);
            res.json(comments);
        });
    },
};