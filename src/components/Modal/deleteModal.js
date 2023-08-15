import ApiEmployee from "@/services/apiEmployee";

export default function DeleteModal({id, name, setDeleteModal, setToggle}) {
const handleCloseModal = () => setDeleteModal(false);

const handleDeleteEmployee = async (e) => {
    e.preventDefault();
    try {
      await ApiEmployee.DeleteEmployee(id);
      setDeleteModal(false);
      setToggle((prev) => !prev);
    } catch (err) {
      console.log(err.response.data.message);
    }
  }; 

  return (
    <div className="z-50 fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-90">
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg font-medium text-2xl w-8 h-8 ml-auto inline-flex justify-center items-center "
            onClick={handleCloseModal}
          >
            X
          </button>
          <div className="p-6 text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              Você realmente quer deletar <br/> o colaborador {name}?
            </h3>
            <button className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            onClick={handleDeleteEmployee}>
              Sim
            </button>
            <button className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
            onClick={handleCloseModal}>
              Não
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
