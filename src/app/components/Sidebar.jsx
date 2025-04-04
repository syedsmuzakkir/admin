// 'use client'
// import { useState } from "react";
// import Link from "next/link";
// import {
//   Home,
//   School,
//   Book,
//   CreditCard,
//   BarChart2,
//   LogOut,
//   Menu,
//   X
// } from "lucide-react";

// export function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Mobile Toggle Button */}
//       <button
//         className="md:hidden p-4 text-white bg-gray-800"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? <X /> : <Menu />}
//       </button>

//       {/* Sidebar */}
//       <aside
//         className={`fixed md:static top-0 left-0 h-full bg-gray-800 text-white flex flex-col w-64 transition-transform transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 md:flex`}
//       >
//         <div className="p-6 text-xl font-bold">Admin Portal</div>
//         <nav className="flex-1">
//           <ul>
//             <li>
//               <Link
//                 href="/admin/dashboard"
//                 className="flex items-center p-4 hover:bg-gray-700 transition-colors"
//               >
//                 <Home className="mr-3" /> Dashboard
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/admin/schools"
//                 className="flex items-center p-4 hover:bg-gray-700 transition-colors"
//               >
//                 <School className="mr-3" /> Schools Management
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/admin/courses"
//                 className="flex items-center p-4 hover:bg-gray-700 transition-colors"
//               >
//                 <Book className="mr-3" /> Courses Management
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/admin/billing"
//                 className="flex items-center p-4 hover:bg-gray-700 transition-colors"
//               >
//                 <CreditCard className="mr-3" /> Billing & Payments
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/admin/reports"
//                 className="flex items-center p-4 hover:bg-gray-700 transition-colors"
//               >
//                 <BarChart2 className="mr-3" /> Reports & Analytics
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         <div className="p-4">
//           <button className="flex items-center w-full hover:bg-gray-700 p-2 rounded transition-colors">
//             <LogOut className="mr-3" /> Logout
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// }


// 2


"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Home,
  School,
  Book,
  CreditCard,
  BarChart2,
  LogOut,
  Menu,
  X
} from "lucide-react";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden p-4 text-white bg-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full bg-gray-800 text-white flex flex-col w-64 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:flex`}
      >
        <div className="p-6 text-xl font-bold">Admin Portal</div>
        <nav className="flex-1">
          <ul>
            {/* Dashboard - coming soon */}
            <li>
              <div className="flex items-center p-4 hover:bg-gray-700 transition-colors cursor-not-allowed">
                <Home className="mr-3" /> Dashboard
                <span className="ml-2 text-sm italic">(coming soon..)</span>
              </div>
            </li>
            {/* Schools Management - live */}
            <li>
              <Link
                href="/admin/schools"
                className="flex items-center p-4 hover:bg-gray-700 transition-colors"
              >
                <School className="mr-3" /> Schools Management
              </Link>
            </li>
            {/* Courses Management - live */}
            <li>
              <Link
                href="/admin/courses"
                className="flex items-center p-4 hover:bg-gray-700 transition-colors"
              >
                <Book className="mr-3" /> Courses Management
              </Link>
            </li>
            {/* Billing & Payments - coming soon */}
            <li>
              <div className="flex items-center p-4 hover:bg-gray-700 transition-colors cursor-not-allowed">
                <CreditCard className="mr-3" /> Billing & Payments
                <span className="ml-2 text-sm italic">(coming soon..)</span>
              </div>
            </li>
            {/* Reports & Analytics - coming soon */}
            <li>
              <div className="flex items-center p-4 hover:bg-gray-700 transition-colors cursor-not-allowed">
                <BarChart2 className="mr-3" /> Reports & Analytics
                <span className="ml-2 text-sm italic">(coming soon..)</span>
              </div>
            </li>
          </ul>
        </nav>
        <div className="p-4">
          <button className="flex items-center w-full hover:bg-gray-700 p-2 rounded transition-colors">
            <LogOut className="mr-3" /> Logout
          </button>
        </div>
      </aside>
    </>
  );
}
