// app/admin/layout.jsx
// import { Sidebar } from "@/components/Sidebar";
import { Sidebar } from "../components/Sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 overflow-auto">
        {children}
      </main>
    </div>
  );
}
