// pages/index.js
'use client'
import Modal from "@/components/shared/Modal";
import { useState } from "react";
import AddCategoryForm from "./AddPrimaryCategoryForm";



export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className="md:flex items-center gap-10">
        <button
          onClick={openModal}
          className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Add Primary Category
        </button>
        <button
          onClick={openModal}
          className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Add Secondary Category
        </button>
        <button
          onClick={openModal}
          className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Add Tertiary Category
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="p-4 text-center">
          <AddCategoryForm />

          {/* <button
            onClick={closeModal}
            className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Close Modal
          </button> */}
        </div>
      </Modal>
    </div>
  );
}
