"use client";

import { useEffect, useState } from "react";
import CreateUserModal from "@/components/Modal/createUserModal";
import Header from "@/components/header/header";
import ApiEmployee from "@/services/apiEmployee";
import UserTbody from "@/components/table/tBody/userTbody";

export default function Home() {
  const [userModal, setUserModal] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [editEmployee, setEditEmployee] = useState("");

  const handleOpenModal = () => setUserModal(true);

  useEffect(() => {
    async function findEmployees() {
      try {
        const result = await ApiEmployee.GetAllEmployee();
        setEmployees(result);
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
    findEmployees();
  }, [toggle]);

  return (
    <>
      <Header setUserModal={setUserModal} />
        <div className="flex flex-col items-center w-full">
        <h1 className="text-3xl font-bold mb-5">Lista de Colaboradores</h1>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={handleOpenModal}
        >
          <h1 className="text-gray-50">Adicionar Colaborador</h1>
        </button>
      
      {userModal && (
        <CreateUserModal
          setUserModal={setUserModal}
          toggle={toggle}
          setToggle={setToggle}
          editEmployee={editEmployee}
          setEditEmployee={setEditEmployee}
        />
      )}

      {employees.length === 0 && <p>Nenhum colaborador encontrado!</p>}
      {employees.length > 0 && (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
          <table className="w-full text-lg text-left text-gray-500 ">
            <thead className="text-lg text-gray-700 uppercase bg-blue-300">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nome
                </th>
                <th scope="col" className="px-6 py-3">
                  Cargo
                </th>
                <th scope="col" className="px-6 py-3">
                  Data de Contratação
                </th>
                <th scope="col" className="px-6 py-3">
                  Deletar
                </th>
                <th scope="col" className="px-6 py-3">
                  Mais
                </th>
              </tr>
            </thead>
            {employees.map((el) => (
              <UserTbody
                key={el.id}
                data={el}
                setToggle={setToggle}
              />
            ))}
          </table>
        </div>
      )}
      </div>
    </>
  );
}
