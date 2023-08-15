"use client";

import { format } from "date-fns";
import ApiEmployee from "@/services/apiEmployee";
import { useState } from "react";

export default function CreateUserModal({
  setUserModal,
  toggle,
  setToggle,
  editEmployee,
  setEditEmployee,
}) {
  const [userInfo, setUserInfo] = useState({
    name: editEmployee ? editEmployee.name : "",
    position: editEmployee ? editEmployee.position : "",
    hireDate: editEmployee
      ? formatDate(editEmployee.hireDate)
      : "",
  });

  function formatDate(el){
    const date = new Date(el)
    return format(date, "yyyy-MM-dd")
  }

  const { name, position, hireDate } = userInfo;

  const handleCloseModal = (e) => {
    e.preventDefault();
    setUserInfo({
      name: "",
      position: "",
      hireDate: "",
    });
    setEditEmployee({
      name: "",
      position: "",
      hireDate: "",
    });
    setUserModal(false);
  };

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const body = {
        name,
        position,
        hireDate: new Date(hireDate).getTime(),
      };
      await ApiEmployee.CreateEmployee(body);
      setUserInfo({
        name: "",
        position: "",
        hireDate: "",
      });
      setToggle(!toggle);
      setUserModal(false);
    } catch (error) {
      console.log(error);
      alert("Campos invalidos");
    }
  }

  return (
    <div className="z-50 fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-90">
      <div className="w-96 p-6 bg-white border border-gray-200 rounded-lg relative">
        <button
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg font-medium text-2xl w-8 h-8 ml-auto inline-flex justify-center items-center "
          onClick={handleCloseModal}
        >
          X
        </button>
        <h3 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white">
          Cadastrar Colaborador
        </h3>
        <form onSubmit={onSubmit}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nome
            </label>
            <input
              className="w-full bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              label="name"
              type="text"
              placeholder="Nome"
              value={name}
              required
              onChange={(e) =>
                setUserInfo({ ...userInfo, name: e.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Cargo
            </label>
            <input
              className="w-full bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              label="Position"
              type="text"
              placeholder="Cargo"
              value={position}
              required
              onChange={(e) =>
                setUserInfo({ ...userInfo, position: e.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Data de Contratação
            </label>
            <input
              className="w-full bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              label="hireDate"
              type="date"
              placeholder="Data de Contratação."
              value={hireDate}
              onChange={(e) =>
                setUserInfo({ ...userInfo, hireDate: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
          >
            Inserir
          </button>
        </form>
      </div>
    </div>
  );
}
