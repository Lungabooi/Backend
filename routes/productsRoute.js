const express = require("express");
const router = express.Router();
const con = require("../lib/db_connection");

router.get("/", (req, res) => {
    try {
        con.query(`SELECT * FROM products`, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});

//Getting one product by Id
router.get("/:id", (req, res) => {
    try {
        con.query(`SELECT * FROM products WHERE product_Id = ${req.params.id}`, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
  });
 
  // Add product into the Product table
router.post('/', (req, res)=> {
    const { product_Id, title, category, description, imgURL, price, user_Id, quantity, }= req.body
    try{
        con.query( 
            `INSERT INTO products (product_Id, title, category, description, imgURL, price, user_Id, quantity) VALUES ( '${product_Id}', '${title}','${category}' ,'${description}', '${imgURL}', '${price}', '${user_Id}', '${quantity}'
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


// Update product using Id 
router.put("/:id", (req, res) => {
    const{
          title, 
          category,
          description, 
          imgURL,
          price,
          user_id,
          quantity,}= req.body
    try {
        con.query(`UPDATE products SET  title='${title}', category='${category}', description='${description}', imgURL='${imgURL}', price='${price}', user_id ='${user_id}', quantity='${quantity}' WHERE product_id ="${req.params.id}"`, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});

// Delete Product using id
router.delete("/:id", (req, res) => {
    try {
        con.query(`DELETE  FROM products WHERE product_id =${req.params.id}`, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});




module.exports = router;