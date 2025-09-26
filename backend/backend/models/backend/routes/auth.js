import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  try {
    const newUser = new User({ username, password: hash });
    await newUser.save();
    res.json({ message: "تم التسجيل بنجاح" });
  } catch {
    res.status(400).json({ error: "اسم المستخدم موجود بالفعل" });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ error: "مستخدم غير موجود" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ error: "كلمة المرور خاطئة" });

  const token = jwt.sign({ id: user._id }, "secretkey");
  res.json({ token });
});

export default router;
