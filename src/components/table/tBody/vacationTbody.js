"use client";

import DeleteModal from "@/components/Modal/deleteModal";
import { useMemo, useState } from "react";
import Link from "next/link";

export default function VacationTbody({ data, setVacationModal, setToggle }) {
  const { id, startDate, endDate } = data;
  const [situation, setSituation] = useState("");

  useMemo(() => {
    function checkSituation(startDate, endDate) {
      const now = new Date().getTime();
      const start = new Date(startDate).getTime();
      const end = new Date(endDate).getTime();

      if (end < now) setSituation("Finalizado");
      if (start < now && end >= now) setSituation("Em andamento");
      if (start > now) setSituation("Agendado");
    }
    checkSituation(startDate, endDate);
  }, []);

  const formattedStartDate = new Date(startDate).toISOString().split("T")[0];
  const formattedEndDate = new Date(endDate).toISOString().split("T")[0];

  return (
    <>
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
          <td className="px-6 py-4 text-gray-900 whitespace-nowrap bg-gray-50">
            {formattedStartDate}
          </td>
          <td className="px-6 py-4 text-center text-gray-900">
            {" "}
            {formattedEndDate}{" "}
          </td>
          <td className="px-6 py-4 text-center text-gray-900 bg-gray-50">
            {situation}
          </td>
        </tr>
      </tbody>
    </>
  );
}
