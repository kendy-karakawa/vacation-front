"use client";

import DeleteModal from "@/components/Modal/deleteModal";
import { useState } from "react";
import Link from "next/link";

export default function UserTbody({ data, setToggle }) {
  const [deleteModal, setDeleteModal] = useState(false);
  const { id, name, position, hireDate } = data;
  const date = new Date(hireDate).toISOString().split("T")[0];

  const handleOpenModal = () => setDeleteModal(true)


  return (
    <>
      {deleteModal && <DeleteModal id={id} name={name} setDeleteModal={setDeleteModal} setToggle={setToggle} />}

      <tbody>
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
          <td className="px-6 py-4 text-gray-900 whitespace-nowrap bg-gray-50">
            {name}
          </td>
          <td className="px-6 py-4 text-center text-gray-900"> {position} </td>
          <td className="px-6 py-4 text-center text-gray-900 bg-gray-50">
            {" "}
            {date}
          </td>
          <td className="px-6 py-4  text-gray-900">
            <button className="font-medium text-red-600 hover:underline"
            onClick={handleOpenModal}
            >
              Deletar
            </button>
          </td>
          <td className="px-6 py-4  text-gray-900">
            <Link className="font-medium text-gray-600 hover:underline" href={`/vacation/${id}`}>
              Mais
            </Link>
          </td>
        </tr>
      </tbody>
    </>
  );
}
