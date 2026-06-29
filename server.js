require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pitchRoutes = require("./routes/pitchRoutes");

const app = express();

app.use(express.json());

app.use(cors({ 
    origin: "*",
    methods: "GET,POST,PUT,DELETE,PATCH,OPTIONS",
    allowedHeaders: "Content-Type,Authorization"
 }));

app.use("/pitch", pitchRoutes);
app.get("/", (req, res) => res.status(200).send({
    message: "Elevator Pitch App is up and running"
}));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
