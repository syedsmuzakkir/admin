"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import CourseFormModal from "@/components/CourseFormModal";

import CourseFormModal from "@/app/components/CourseFormModal";

// Dummy course data
const initialCourses = [
  { id: 1, title: "Ms powerpoint", description: "Advanced powerpoint Course" },
  { id: 2, title: "Ms excel ", description: "Basic excel Course" },
  { id: 3, title: "Ms word", description: "Beginner word Course" },
];

export default function CourseManagementPage() {
  const [courses, setCourses] = useState(initialCourses);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);

  const handleAddCourse = (course) => {
    setCourses([...courses, { id: courses.length + 1, ...course }]);
  };

  const handleEditCourse = (updatedCourse) => {
    setCourses(
      courses.map((course) =>
        course.id === updatedCourse.id ? updatedCourse : course
      )
    );
  };

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const openAddModal = () => {
    setCurrentCourse(null);
    setIsModalOpen(true);
  };

  const openEditModal = (course) => {
    setCurrentCourse(course);
    setIsModalOpen(true);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Course Management</h1>
      <div className="mb-6">
        <Button variant="default" onClick={openAddModal}>
          Add New Course
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Course Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course.id}>
              <TableCell>{course.title}</TableCell>
              <TableCell>{course.description}</TableCell>
              <TableCell>
                <button
                  className="text-blue-500 hover:underline mr-2"
                  onClick={() => openEditModal(course)}
                >
                  Edit
                </button>
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => handleDeleteCourse(course.id)}
                >
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {isModalOpen && (
        <CourseFormModal
          course={currentCourse}
          onClose={() => setIsModalOpen(false)}
          onSave={(course) => {
            if (currentCourse) {
              handleEditCourse(course);
            } else {
              handleAddCourse(course);
            }
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
}
