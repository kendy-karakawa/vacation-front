import Link from 'next/link'

export default function Header({ setUserModal }) {
  return (
    <div className="bg-gray-800 fixed top-0 left-0 w-full z-10 ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <h1 className="text-gray-50">GESTÃO DE FÉRIAS</h1>
          <Link href={"/"}>
          <h1 className="text-gray-50">HOME</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
