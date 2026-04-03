const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const app = express();

const cors = require("cors");

app.use(
  cors({
    origin: "*",
  }),
);
app.use(cors());
app.use(express.json());

console.log("🚀 Server starting...");

// ================= MONGODB =================
mongoose
  .connect("mongodb://127.0.0.1:27017/careernest")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error:", err));

// ================= MODELS =================

// USER
const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

// JOB
const Job = mongoose.model("Job", {
  title: String,
  company: String,
  location: String,
  salary: String,
});

// APPLY
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

// TEST
app.get("/", (req, res) => {
  res.send("🔥 Backend Running");
});

// ================= SIGNUP =================
app.post("/signup", async (req, res) => {
  try {
    console.log("Signup Data:", req.body);

    const { name, email, password } = req.body;

    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({ message: "User already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashed,
    });

    await user.save();

    console.log("✅ User Saved");

    res.json({ message: "Signup successful" });
  } catch (err) {
    console.log("❌ Signup Error:", err);
    res.json({ message: "Signup Error" });
  }
});

// ================= LOGIN =================
app.post("/login", async (req, res) => {
  try {
    console.log("Login Data:", req.body);

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ message: "Wrong password" });
    }

    console.log("✅ Login Success");

    res.json({ message: "Login successful", user });
  } catch (err) {
    console.log("❌ Login Error:", err);
    res.json({ message: "Login Error" });
  }
});

// ================= ADD JOB =================
app.post("/add-job", async (req, res) => {
  try {
    console.log("Job Data:", req.body);

    const job = new Job(req.body);
    await job.save();

    res.json({ message: "Job saved" });
  } catch (err) {
    console.log("❌ Job Error:", err);
    res.json({ message: "Error saving job" });
  }
});

// ================= GET JOBS =================
app.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    console.log("❌ Fetch Error:", err);
    res.json({ message: "Error fetching jobs" });
  }
});

// ================= APPLY JOB =================
app.post("/apply", async (req, res) => {
  try {
    console.log("🔥 APPLY DATA:", req.body); // 👈 important

    const apply = new Apply(req.body);
    await apply.save();

    console.log("✅ Application Saved");

    res.json({ message: "Applied Successfully" });
  } catch (err) {
    console.log("❌ Apply Error:", err);
    res.json({ message: "Apply Error" });
  }
});

// ================= SERVER =================
app.listen(5000, () => {
  console.log("🔥 Server running on http://localhost:5000");
});
