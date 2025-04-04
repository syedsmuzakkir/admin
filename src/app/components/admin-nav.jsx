// components/admin-nav.js
'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AdminNav() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex gap-4">
        <Link href="/admin/dashboard">
          <Button variant="ghost" className="text-white">Dashboard</Button>
        </Link>
        <Link href="/admin/schools">
          <Button variant="ghost" className="text-white">Schools</Button>
        </Link>
        <Link href="/admin/courses">
          <Button variant="ghost" className="text-white">Courses</Button>
        </Link>
      </div>
      <Button variant="outline" className="text-white">Logout</Button>
    </nav>
  );
}