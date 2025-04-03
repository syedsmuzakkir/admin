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
// import SchoolForm from "@/components/SchoolForm";
import SchoolForm from "@/app/components/SchoolForm";

// Initial dummy school data
const initialSchools = [
  { id: 1, name: "ABC School", status: "Active" },
  { id: 2, name: "XYZ Academy", status: "Inactive" },
  { id: 3, name: "Sunrise High", status: "Active" },
  { id: 4, name: "Hyderabad school", status: "Active" },
  { id: 5, name: "Tech Academy", status: "Active" },

];

export default function SchoolManagementPage() {
  const [schools, setSchools] = useState(initialSchools);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Filter schools based on search term
  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle add/edit form submission
  const handleFormSubmit = (schoolData) => {
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
    setSchools(schools.filter((school) => school.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">School Management</h1>
        <Input
          placeholder="Search schools..."
          className="w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={() => setIsFormOpen(true)}>Add New School</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>School Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredSchools.map((school) => (
            <TableRow key={school.id}>
              <TableCell>{school.name}</TableCell>
              <TableCell>{school.status}</TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    setSelectedSchool(school);
                    setIsFormOpen(true);
                  }}
                  className="mr-2"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(school.id)}
                  className="bg-red-500 hover:bg-red-600"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

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
