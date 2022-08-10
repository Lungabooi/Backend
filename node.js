const express = require("express"); // Used to set up a server
const cors = require("cors"); // Used to prevent errors when working locally

const app = express(); // Initialize express as an app variable
app.set("port", process.env.PORT || 8080); // Set the port
app.use(express.json()); // Enable the server to handle JSON requests
app.use(cors()); // Dont let local development give errors

// connecting my index.html 
// app.use(express.static('public'))

// Import routes
// const userRoute = require("./routes/userRoute");
// const categoriesRoute = require("./routes/categoriesRoute");
// const productsRoute = require("./routes/productsRoute");
// const ordersRoute = require("./routes/ordersRoute");


// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/" + "public/index.html")
// });

// app.get("/login", (req, res) => {
//     res.sendFile(__dirname + "/login" + ".html")
// });

// app.use("/users", userRoute);

// app.use("/categories", categoriesRoute);

// app.use("/products", productsRoute); 

// app.use("/orders", ordersRoute);


app.listen(app.get("port"), () => {
    console.log(`Listening for calls on port ${app.get("port")}`);
    console.log("Press Ctrl+C to exit server");
});