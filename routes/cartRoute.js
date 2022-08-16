const express = require("express");
const router = express.Router();
const con = require("../lib/db_connection");

//Get cart by Id from the database
router.get("/:id", (req, res) => {
    try {
        con.query(`SELECT * FROM cart WHERE cart_id =${req.params.id}`, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
  });

  router.delete("/:id", (req, res) => {
    try {
        con.query(`DELETE  FROM cart WHERE cart_id =${req.params.id}`, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
  });
 
router.post('/', (req, res)=> {
    const { name, description, thumbnail,}= req.body
    try{
        con.query( 
            `INSERT INTO categories (name, description, thumbnail) values('${name}', '${description}', '${thumbnail}'
        )`, 
            (err, result) => {
            if (err) throw err;
            res.send(result);
        });
        
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: error})
    };
});

module.exports = router;