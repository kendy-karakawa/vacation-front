export default function UserTbody({data, setEditEmployee, setUserModal}) {
    const { name, position, hireDate } = data;
    const date = new Date(hireDate).toISOString().split("T")[0]

    function editItem(e){
      e.preventDefault();
      setEditEmployee(data)
      setUserModal(true)
    }
  
    return (
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
          <td className="px-6 py-4 text-gray-900 whitespace-nowrap bg-gray-50">
           {name}
          </td>
          <td className="px-6 py-4 text-center text-gray-900"> {position} </td>
          <td className="px-6 py-4 text-center text-gray-900 bg-gray-50"> {date}</td>
  
          <td className="px-6 py-4  text-gray-900">
            <button className="font-medium text-blue-600 hover:underline"
            onClick={editItem}
            >
              Editar
            </button>
          </td>
          <td className="px-6 py-4  text-gray-900">
            <button className="font-medium text-red-600 hover:underline"
            
            >
              Deletar
            </button>
          </td>
          <td className="px-6 py-4  text-gray-900">
            <button className="font-medium text-blue-600 hover:underline"
            
            >
              Ir
            </button>
          </td>
        </tr>
      </tbody>
    );
  }
  