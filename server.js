require("dotenv").config();
const connectDB = require("./config/db");

const express = require("express");
const authRoutes = require("./routes/authRoutes");
const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);
app.get("/api/health", (req, res) => {
    res.json({ message: "Squareslab API running" });
});

const PORT = 3000;

async function startServer() {
    await connectDB();

    app.listen(PORT, () => {
        console.log("Server running on port 3000");
    });
    
}

startServer();