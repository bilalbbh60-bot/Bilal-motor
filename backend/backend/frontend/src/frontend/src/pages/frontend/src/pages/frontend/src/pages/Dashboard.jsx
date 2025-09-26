import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">لوحة التحكم</h1>
      <Link
        to="/editor/1"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        إنشاء مشروع جديد
      </Link>
    </div>
  );
}
