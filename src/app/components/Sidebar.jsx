// components/Sidebar.js
import Link from "next/link";
import { Home, School, Book, CreditCard, BarChart2, LogOut } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 h-full bg-gray-800 text-white flex flex-col">
      <div className="p-6 text-xl font-bold">Admin Portal</div>
      <nav className="flex-1">
        <ul>
          <li>
            <Link
              href="/admin/dashboard"
              className="flex items-center p-4 hover:bg-gray-700 transition-colors"
            >
              <Home className="mr-3" /> Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/admin/schools"
              className="flex items-center p-4 hover:bg-gray-700 transition-colors"
            >
              <School className="mr-3" /> Schools Management
            </Link>
          </li>
          <li>
            <Link
              href="/admin/courses"
              className="flex items-center p-4 hover:bg-gray-700 transition-colors"
            >
              <Book className="mr-3" /> Courses Management
            </Link>
          </li>
          <li>
            <Link
              href="/admin/billing"
              className="flex items-center p-4 hover:bg-gray-700 transition-colors"
            >
              <CreditCard className="mr-3" /> Billing & Payments
            </Link>
          </li>
          <li>
            <Link
              href="/admin/reports"
              className="flex items-center p-4 hover:bg-gray-700 transition-colors"
            >
              <BarChart2 className="mr-3" /> Reports & Analytics
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <button className="flex items-center w-full hover:bg-gray-700 p-2 rounded transition-colors">
          <LogOut className="mr-3" /> Logout
        </button>
      </div>
    </aside>
  );
}
