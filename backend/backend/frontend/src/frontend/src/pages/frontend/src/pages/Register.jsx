import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        username,
        password,
      });
      alert("تم التسجيل بنجاح، قم بتسجيل الدخول الآن");
      window.location.href = "/";
    } catch (err) {
      alert("اسم المستخدم موجود بالفعل");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">تسجيل حساب جديد</h1>
      <input
        placeholder="اسم المستخدم"
        className="border p-2 mb-2"
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="password"
        placeholder="كلمة المرور"
        className="border p-2 mb-2"
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handleRegister} className="bg-green-500 text-white px-4 py-2 rounded">
        تسجيل
      </button>
    </div>
  );
}
