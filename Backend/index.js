require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Router = require('./Router/router');
const cors = require('cors');
const User = require('./model/user_auth');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', Router);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => {
      console.error("❌ MongoDB Connection Error:", err);
      process.exit(1);
  });

// User Registration Route
app.post('/register', async (req, res) => {
    try {
        console.log("Received Request:", req.body); // ✅ Debugging log

        const { name, email, contact, password, address } = req.body;

        // ✅ Check if all fields exist
        if (!name || !email || !contact || !password || !address) {
            console.error("Missing Fields:", req.body);
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // ✅ Check if MongoDB connection is working
        if (!mongoose.connection.readyState) {
            console.error("MongoDB Not Connected!");
            return res.status(500).json({ success: false, message: "Database connection failed" });
        }

        // ✅ Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.error("User Already Exists:", email);
            return res.status(400).json({ success: false, message: "User already registered" });
        }

        // ✅ Save new user
        const newUser = new User({ name, email, contact, password, address });
        await newUser.save();

        console.log("User Registered Successfully:", newUser);
        res.status(201).json({ success: true, message: "User registered successfully" });

    } catch (error) {
        console.error("🔥 Server Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
    }
});

// Start Server
const PORT = process.env.PORT || 6060;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

