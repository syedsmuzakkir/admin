"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import SchoolForm from "@/app/components/SchoolForm";

// Initial dummy school data with all fields from SchoolForm
const initialSchools = [
  {
    id: 1,
    name: "ABC School",
    status: "Active",
    location: "New York",
    address: "123 Main St",
    phone: "555-123-4567",
    email: "abc@school.org",
    establishedDate: "1990-01-01",
  },
  {
    id: 2,
    name: "XYZ Academy",
    status: "Inactive",
    location: "Los Angeles",
    address: "456 Oak Ave",
    phone: "555-987-6543",
    email: "xyz@academy.org",
    establishedDate: "1985-03-15",
  },
  {
    id: 3,
    name: "Sunrise High",
    status: "Active",
    location: "Chicago",
    address: "789 Pine Rd",
    phone: "555-456-7890",
    email: "sunrise@high.org",
    establishedDate: "2000-09-10",
  },
  {
    id: 4,
    name: "Hyderabad School",
    status: "Active",
    location: "India",
    address: "101 School Lane",
    phone: "555-111-2222",
    email: "hyd@school.org",
    establishedDate: "1975-06-20",
  },
  {
    id: 5,
    name: "Tech Academy",
    status: "Active",
    location: "USA",
    address: "202 Tech Blvd",
    phone: "555-333-4444",
    email: "tech@academy.org",
    establishedDate: "2010-12-01",
  },
];

export default function SchoolManagementPage() {
  const [schools, setSchools] = useState(initialSchools);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Filter schools based on search term (case-insensitive)
  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  // Handle add/edit form submission
  const handleFormSubmit = (schoolData) => {
    if (!schoolData.name || !schoolData.location) {
      alert("School name and location are required!");
      return;
    }
    if (selectedSchool) {
      // Edit existing school
      setSchools(
        schools.map((school) =>
          school.id === selectedSchool.id ? { ...school, ...schoolData } : school
        )
      );
    } else {
      // Add new school
      const newSchool = {
        id: schools.length + 1,
        ...schoolData,
      };
      setSchools([...schools, newSchool]);
    }
    setIsFormOpen(false);
    setSelectedSchool(null);
  };

  // Handle delete action
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this school?")) {
      setSchools(schools.filter((school) => school.id !== id));
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6 flex-col sm:flex-row gap-4">
        <h1 className="text-2xl font-bold">School Management</h1>
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <Input
            placeholder="Search schools..."
            className="w-full sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button onClick={() => setIsFormOpen(true)}>Add New School</Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>School Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Established Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSchools.length > 0 ? (
              filteredSchools.map((school) => (
                <TableRow key={school.id}>
                  <TableCell>{school.name}</TableCell>
                  <TableCell>{school.status}</TableCell>
                  <TableCell>{school.location}</TableCell>
                  <TableCell>{school.address}</TableCell>
                  <TableCell>{school.phone}</TableCell>
                  <TableCell>{school.email}</TableCell>
                  <TableCell>{school.establishedDate}</TableCell>
                  <TableCell className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedSchool(school);
                        setIsFormOpen(true);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(school.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="text-center">
                  No schools found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {isFormOpen && (
        <SchoolForm
          initialData={selectedSchool}
          onSubmit={handleFormSubmit}
          onClose={() => {
            setIsFormOpen(false);
            setSelectedSchool(null);
          }}
        />
      )}
    </div>
  );
}