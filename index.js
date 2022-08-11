const express = require("express"); // Used to set up a server
const cors = require("cors"); // Used to prevent errors when working locally

const app = express(); // Initialize express as an app variable
app.set("port", process.env.PORT || 9000); // Set the port
app.use(express.json()); // Enable the server to handle JSON requests
app.use(cors()); // Dont let local development give errors


const staticPath = path.join(__dirname + 'public')
// connecting my index.html 
app.use(express.static(staticPath))

// Import routes
const userRoute = require("./routes/userRoute");
const categoriesRoute = require("./routes/categoriesRoute");
const productsRoute = require("./routes/productsRoute");



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "login.html"))
});

// app.get("/login", (req, res) => {
//     res.sendFile(__dirname + "/login" + ".html")
// });

app.use("/users", userRoute);

app.use("/categories", categoriesRoute);

app.use("/products", productsRoute); 




app.listen(app.get("port"), () => {
    console.log(`Listening for calls on port ${app.get("port")}`);
    console.log("Press Ctrl+C to exit server");
});