const express = require("express"); // Used to set up a server
const cors = require("cors"); // Used to prevent errors when working locally
const path = require("path")

const app = express(); // Initialize express as an app variable
app.set("port", process.env.PORT || 9000); // Set the port
app.use(express.json()); // Enable the server to handle JSON requests
app.use(cors({
    origin: ['http://localhost:9000', 'http://127.0.0.1:9000'],
    credentials: true,
})); // Dont let local development give errors


const staticPath = path.join(__dirname + 'public')
// connecting my index.html 
app.use(express.static(staticPath))

// Import routes
const userRoute = require("./routes/userRoute");
const productsRoute = require("./routes/productsRoute");


// Login page
app.use(express.static("public"));//Static

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/" + "index.html")
});

app.use(express.static("public"));//Static

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/" + "register.html")
});

app.use("/users", userRoute);

app.use("/products", productsRoute); 




app.listen(app.get("port"), () => {
    console.log(`Listening for calls on port ${app.get("port")}`);
    console.log("Press Ctrl+C to exit server");
});