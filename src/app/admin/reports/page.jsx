// // app/admin/reports/page.jsx
// "use client";


// import DummyChart from "@/app/components/DummyChart";
// import BarChart from "@/components/ui/charts";

// export default function ReportsPage() {

//     const data = [
//         { name: "School 1", value: 10 },
//         { name: "School 2", value: 30 },
//         { name: "School 3", value: 50 },
//       ];
    
//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Reports</h1>
//       <div className="grid grid-cols-1 gap-6">
//         <div className="p-4 bg-white dark:bg-gray-800 shadow rounded">
//           <h2 className="text-lg font-bold">Student Activity Report</h2>
//           <DummyChart />
//         </div>
//         <div className="p-4 bg-white dark:bg-gray-800 shadow rounded">
//           <h2 className="text-lg font-bold">School Engagement Report</h2>
//           <DummyChart />
//           <BarChart data={data} />
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import DummyChart from "@/app/components/DummyChart";
import BarChart from "@/components/ui/charts";
import { Button } from "@/components/ui/button";
import { saveAs } from "file-saver";
import Papa from "papaparse";

// Dummy report data
const studentActivityReport = [
  { date: "2025-04-01", students: 120, newEnrollments: 30, dropouts: 5 },
  { date: "2025-04-02", students: 140, newEnrollments: 40, dropouts: 8 },
  { date: "2025-04-03", students: 130, newEnrollments: 35, dropouts: 6 },
];

const schoolEngagementReport = [
  { date: "2025-04-01", engagement: "80%", activeSchools: 50, inactiveSchools: 10 },
  { date: "2025-04-02", engagement: "85%", activeSchools: 55, inactiveSchools: 8 },
  { date: "2025-04-03", engagement: "78%", activeSchools: 48, inactiveSchools: 12 },
];

const studentPerformanceReport = [
  { name: "Week 1", value: 75 },
  { name: "Week 2", value: 85 },
  { name: "Week 3", value: 90 },
  { name: "Week 4", value: 80 },
];

export default function ReportsPage() {
  // Function to export CSV
  const exportCSV = (data, filename) => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, filename);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      
      <div className="grid grid-cols-1 gap-6">
        <div className="p-4 bg-white dark:bg-gray-800 shadow rounded">
          <h2 className="text-lg font-bold">Student Activity Report</h2>
          <DummyChart />
          <p className="text-sm mt-2">New Enrollments: {studentActivityReport[studentActivityReport.length - 1].newEnrollments}</p>
          <p className="text-sm">Dropouts: {studentActivityReport[studentActivityReport.length - 1].dropouts}</p>
          <Button onClick={() => exportCSV(studentActivityReport, "student_activity.csv")} className="mt-2">Download CSV</Button>
        </div>
        
        <div className="p-4 bg-white dark:bg-gray-800 shadow rounded">
          <h2 className="text-lg font-bold">School Engagement Report</h2>
          <DummyChart />
          <BarChart data={schoolEngagementReport.map(item => ({ name: item.date, value: parseFloat(item.engagement) }))} />
          <p className="text-sm mt-2">Active Schools: {schoolEngagementReport[schoolEngagementReport.length - 1].activeSchools}</p>
          <p className="text-sm">Inactive Schools: {schoolEngagementReport[schoolEngagementReport.length - 1].inactiveSchools}</p>
          <Button onClick={() => exportCSV(schoolEngagementReport, "school_engagement.csv")} className="mt-2">Download CSV</Button>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 shadow rounded">
          <h2 className="text-lg font-bold">Student Performance Report</h2>
          <BarChart data={studentPerformanceReport} />
          <Button onClick={() => exportCSV(studentPerformanceReport, "student_performance.csv")} className="mt-2">Download CSV</Button>
        </div>
      </div>
    </div>
  );
}
