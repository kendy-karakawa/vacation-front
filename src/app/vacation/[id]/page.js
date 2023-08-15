"use client";

import CreateVacationModal from "@/components/Modal/createVacationModal";
import Header from "@/components/header/header";
import VacationTbody from "@/components/table/tBody/vacationTbody";
import ApiEmployee from "@/services/apiEmployee";
import apiVacation from "@/services/apiVacation";
import { useEffect, useState } from "react";

export default function vacation({params}) {
  const [employee, setEmployee] = useState("")
  const [vacations, setVacations] = useState([]);
  const [vacationModal, setVacationModal] = useState(false)
  const [toggle, setToggle] = useState(false);

  const handleOpenModal = () => setVacationModal(true);

  
  useEffect(() => {
    async function getVacations(employeeId) {
      try {
        const result = await ApiEmployee.getEmployeeData(employeeId);
        setVacations(result.VacationPeriod);
        setEmployee(result)
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
    getVacations(params.id)
  }, [toggle]);


  return (
    <>
      <Header />
      <div className="flex flex-col items-center w-full">
        <h1 className="text-3xl font-bold mb-5">Férias de {employee.name}</h1>
        {vacations.length === 0 && <p className="mb-5">Nenhuma férias encontrado para este colaborador!</p>}
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={handleOpenModal}
        >
          <h1 className="text-gray-50">Adicionar férias</h1>
        </button>

        {vacationModal && <CreateVacationModal
        setVacationModal={setVacationModal}
        setToggle={setToggle}
        id={params.id}
        />}

      {vacations.length > 0 && <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <table className="w-full text-lg text-left text-gray-500 ">
          <thead className="text-lg text-gray-700 uppercase bg-blue-300">
            <tr>
              <th scope="col" className="px-6 py-3">
                Inicio
              </th>
              <th scope="col" className="px-6 py-3">
                Fim
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          {vacations.map((el) => (
            <VacationTbody
              key={el.id}
              data={el}
              setVacationModal={setVacationModal}
              setToggle={setToggle}
            />
          ))}
        </table>
      </div>}
      </div>
    </>
  );
}
