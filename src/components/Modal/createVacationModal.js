"use client";

import ApiVacation from "@/services/apiVacation";
import { useState } from "react";

export default function CreateVacationModal({setVacationModal, setToggle, id}) {
  const [vacationPeriod, setVacationPeriod] = useState({
    start: "",
    end: "",
  });


  const { start, end } = vacationPeriod;

  const handleCloseModal = (e) => {
    e.preventDefault();
    setVacationPeriod({
      start: "",
      end: "",
    });
    setVacationModal(false);
  };

  async function addVacation(e) {
    e.preventDefault();
    try {
      const body = {
        startDate:new Date(start).getTime(),
        endDate: new Date(end).getTime(),
        id: parseInt(id)
      };
      await ApiVacation.CreateVacation(body);
      setVacationPeriod({
        start: "",
        end: "",
      });
      setVacationModal(false);
      setToggle((prev) => !prev)
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
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
          Adicionar férias
        </h3>
        <form onSubmit={addVacation}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Data de Início
            </label>
            <input
              className="w-full bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              label="startDate"
              type="date"
              value={start}
              required
              onChange={(e) =>
                setVacationPeriod({ ...vacationPeriod, start: e.target.value })
              }
            />
          </div>
          
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Data de Término
            </label>
            <input
              className="w-full bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              label="endDate"
              type="date"
              value={end}
              onChange={(e) =>
                setVacationPeriod({ ...vacationPeriod, end: e.target.value })
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
