// // app/admin/layout.jsx
// // import { Sidebar } from "@/components/Sidebar";
// import { Sidebar } from "../components/Sidebar";

// export default function AdminLayout({ children }) {
//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 overflow-auto">
//         {children}
//       </main>
//     </div>
//   );
// }






// 2 this is working routes for redirect ? hard coded 
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { Sidebar } from "../components/Sidebar";

const disabledRoutes = [
  "/admin/dashboard",
  "/admin/reports",
  "/admin/billing"
];

// Add this dynamic export
export const dynamic = 'force-dynamic';

export default async function AdminLayout({ children }) {
  // Await headers before using them
  const headersList = await headers();
  const pathname = headersList.get('x-invoke-path') || '';
  
  // Normalize path to handle trailing slashes
  const normalizedPath = pathname.replace(/\/$/, '');

  if (disabledRoutes.includes(normalizedPath)) {
    redirect('/admin');
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 overflow-auto">
        {children}
      </main>
    </div>
  );
}
