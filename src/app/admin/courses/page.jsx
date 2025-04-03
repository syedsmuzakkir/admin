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
import CourseFormModal from "@/app/components/CourseFormModal";

// Updated dummy course data
const initialCourses = [
  {
    id: 1,
    title: "Ms PowerPoint",
    description: "Advanced PowerPoint Course",
    level: "Advanced",
  },
  {
    id: 2,
    title: "Ms Excel",
    description: "Basic Excel Course",
    level: "Beginner",
  },
  {
    id: 3,
    title: "Ms Word",
    description: "Beginner Word Course",
    level: "Beginner",
  },
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
    if (confirm("Are you sure you want to delete this course?")) {
      setCourses(courses.filter((course) => course.id !== id));
    }
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
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Course Management</h1>
        <Button
          variant="default"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-200"
          onClick={openAddModal}
        >
          Add New Course
        </Button>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="font-semibold text-gray-700 py-3">
                Course Title
              </TableHead>
              <TableHead className="font-semibold text-gray-700 py-3">
                Description
              </TableHead>
              <TableHead className="font-semibold text-gray-700 py-3">
                Level
              </TableHead>
              <TableHead className="font-semibold text-gray-700 py-3">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.length > 0 ? (
              courses.map((course) => (
                <TableRow
                  key={course.id}
                  className="hover:bg-gray-50 transition duration-150"
                >
                  <TableCell className="py-4">{course.title}</TableCell>
                  <TableCell className="py-4">{course.description}</TableCell>
                  <TableCell className="py-4">{course.level}</TableCell>
                  <TableCell className="py-4 flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-blue-600 border-blue-600 hover:bg-blue-50 hover:text-blue-700 transition duration-150"
                      onClick={() => openEditModal(course)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="bg-red-600 hover:bg-red-700 text-white transition duration-150"
                      onClick={() => handleDeleteCourse(course.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-4 text-gray-500">
                  No courses available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

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