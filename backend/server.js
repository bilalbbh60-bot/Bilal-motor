import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/gamebuilder", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
