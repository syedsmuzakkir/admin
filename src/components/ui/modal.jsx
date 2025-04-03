import React from "react";

export function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        {children}
        <button onClick={onClose} className="mt-4 bg-red-500 text-white p-2 rounded">Close</button>
      </div>
    </div>
  );
}

export function ModalHeader({ title }) {
  return <h2 className="text-xl font-bold">{title}</h2>;
}

export function ModalContent({ children }) {
  return <div className="mt-2">{children}</div>;
}

export function ModalFooter({ children }) {
  return <div className="mt-4">{children}</div>;
}
