const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./database");
const authRoutes = require("./routes/auth");

// Load environment variables
dotenv.config();

// Initialize express
const app = express();

// Middleware
app.use(express.json());

// ✅ Allow frontend
app.use(
  cors({
    origin: "http://localhost:5173", // frontend
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Connect to MongoDB
connectDB();

// Routes
app.use("/", authRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("🚀 Backend API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
