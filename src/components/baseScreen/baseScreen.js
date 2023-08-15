export default function BaseScreen({ children }) {
    return (
      <div className="w-full h-screen pt-20 pb-20 p-5 flex items-start justify-center bg-gray-300 overflow-auto">
        <div className="flex flex-col items-center w-full ">{children}</div>
      </div>
    );
  }
  