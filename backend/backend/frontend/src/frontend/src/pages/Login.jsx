import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard";
    } catch (err) {
      alert("خطأ في تسجيل الدخول");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">تسجيل الدخول</h1>
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
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
        دخول
      </button>
    </div>
  );
}
