// app/admin/billing/page.jsx
"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Dummy invoice data
const invoices = [
  { id: 1, invoiceId: "#INV001", amount: "$1,200", status: "Paid", dueDate: "2025-04-10" },
  { id: 2, invoiceId: "#INV002", amount: "$2,200", status: "Pending", dueDate: "2025-04-15" },
];

export default function BillingPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Billing & Payments</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice ID</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Due Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell>{invoice.invoiceId}</TableCell>
              <TableCell>{invoice.amount}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell>{invoice.dueDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
