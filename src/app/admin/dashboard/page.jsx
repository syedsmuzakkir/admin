"use client";

import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {

  // Dummy statistics data
  
  const stats = {
    totalSchools: 50,
    activeStudents: 1200,
    totalRevenue: "$150,000",
    pendingPayments: "$3,400",
  };

  // Dummy recent activity data
  const recentActivities = [
    { activity: "Enrolled new students", school: "Greenwood High", date: "2025-04-01", status: "Completed" },
    { activity: "Updated course materials", school: "Sunrise Academy", date: "2025-04-02", status: "Pending" },
    { activity: "Scheduled parent-teacher meeting", school: "Riverdale School", date: "2025-04-03", status: "Completed" },
    { activity: "Processed tuition fees", school: "Hilltop School", date: "2025-04-03", status: "Pending" },
  ];

  return (
    <div className="p-6">
      {/* Header with Logout Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button className="bg-red-500 hover:bg-red-600">
          Logout
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card className="p-4">
          <h2 className="text-lg font-bold">Total Schools</h2>
          <p className="mt-2 text-3xl">{stats.totalSchools}</p>
        </Card>
        <Card className="p-4">
          <h2 className="text-lg font-bold">Active Students</h2>
          <p className="mt-2 text-3xl">{stats.activeStudents}</p>
        </Card>
        <Card className="p-4">
          <h2 className="text-lg font-bold">Total Revenue</h2>
          <p className="mt-2 text-3xl">{stats.totalRevenue}</p>
        </Card>
        <Card className="p-4">
          <h2 className="text-lg font-bold">Pending Payments</h2>
          <p className="mt-2 text-3xl">{stats.pendingPayments}</p>
        </Card>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-bold mb-4">Recent Activity</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Activity</TableHead>
              <TableHead>School</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentActivities.map((activity, index) => (
              <TableRow key={index}>
                <TableCell>{activity.activity}</TableCell>
                <TableCell>{activity.school}</TableCell>
                <TableCell>{activity.date}</TableCell>
                <TableCell>{activity.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
