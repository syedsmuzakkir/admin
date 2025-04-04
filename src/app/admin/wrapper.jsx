// app/admin/AdminLayoutWrapper.jsx
'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Sidebar } from '../components/Sidebar';
import { useEffect } from 'react';

const disabledRoutes = ['/admin/dashboard', '/admin/reports', '/admin/billing'];

export default function AdminLayoutWrapper({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (disabledRoutes.includes(pathname)) {
      router.push('/admin');
    }
  }, [pathname, router]);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 overflow-auto">
        {children}
      </main>
    </div>
  );
}