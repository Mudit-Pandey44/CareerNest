require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const app = express();

// ✅ CORS (only once)
app.use(cors());

// ✅ Body parser
app.use(express.json());

console.log("🚀 Server starting...");

// ================= MONGODB =================
// ⚠️ IMPORTANT: use ENV variable
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error:", err));

// ================= MODELS =================

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

const Job = mongoose.model("Job", {
  title: String,
  company: String,
  location: String,
  salary: String,
});

const Apply = mongoose.model("Apply", {
  userEmail: String,
  jobTitle: String,
  company: String,
  resume: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// ================= ROUTES =================

app.get("/", (req, res) => {
  res.send("🔥 Backend Running");
});

// SIGNUP
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exist = await User.findOne({ email });
    if (exist) return res.json({ message: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashed });
    await user.save();

    res.json({ message: "Signup successful" });
  } catch (err) {
    console.log(err);
    res.json({ message: "Signup Error" });
  }
});

// LOGIN
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ message: "Wrong password" });

    res.json({ message: "Login successful", user });
  } catch (err) {
    res.json({ message: "Login Error" });
  }
});

// JOBS
app.get("/jobs", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// APPLY
app.post("/apply", async (req, res) => {
  try {
    console.log("🔥 APPLY DATA:", req.body);

    const apply = new Apply(req.body);
    await apply.save();

    res.json({ message: "Applied Successfully" });
  } catch (err) {
    res.json({ message: "Apply Error" });
  }
});

// ================= SERVER =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});
