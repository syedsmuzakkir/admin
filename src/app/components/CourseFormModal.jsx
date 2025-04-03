import { useState, useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalFooter } from "@/components/ui/modal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CourseFormModal({ course, onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (course) {
      setTitle(course.title);
      setDescription(course.description);
    }
  }, [course]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: course ? course.id : undefined, title, description });
  };

  return (
    <Modal onClose={onClose}>
      <ModalContent>
        <ModalHeader>{course ? "Edit Course" : "Add New Course"}</ModalHeader>
        <form onSubmit={handleSubmit}>
          <Input
            label="Course Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Input
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <ModalFooter>
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
