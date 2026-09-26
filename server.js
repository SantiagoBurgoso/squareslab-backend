require("dotenv").config();
const connectDB = require("./config/db");

const express = require("express");
const app = express();
app.use(express.json());
app.get("/api/health", (req, res) => {
    res.json({ message: "Sequareslab API running" });
});

const PORT = 3000;

async function startServer() {
    await connectDB();

    app.listen(PORT, () => {
        console.log("Server running on port 3000");
    });
    
}

startServer();