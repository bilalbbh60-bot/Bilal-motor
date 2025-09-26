import { useState } from "react";

export default function Editor() {
  const [code, setCode] = useState("");

  const handleSave = () => {
    alert("تم حفظ المشروع (للتجربة فقط)");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">محرر الأكواد</h1>
      <textarea
        className="w-full h-64 border p-2"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button
        onClick={handleSave}
        className="bg-green-500 text-white px-4 py-2 rounded mt-2"
      >
        حفظ
      </button>
    </div>
  );
}
