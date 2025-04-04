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


// app/admin/layout.jsx
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { Sidebar } from "../components/Sidebar";

const disabledRoutes = [
  "/admin/dashboard",
  "/admin/reports", 
  "/admin/billing"
];

export default function AdminLayout({ children }) {
  // Server-side path check
  const headersList = headers();
  const pathname = headersList.get('x-invoke-path') || '';
  
  if (disabledRoutes.includes(pathname)) {
    redirect('/admin');
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 overflow-auto">
        <ClientSideBlocker />
        {children}
      </main>
    </div>
  );
}

// Client-side double check
function ClientSideBlocker() {
  return (
    <script dangerouslySetInnerHTML={{
      __html: `
        const disabledRoutes = ${JSON.stringify(disabledRoutes)};
        if (disabledRoutes.includes(window.location.pathname)) {
          window.location.href = '/admin';
        }
      `
    }} />
  );
}
