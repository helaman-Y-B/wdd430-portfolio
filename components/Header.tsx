import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white body-font border-b border-gray-200">
      <div id="header-title" className="text-2xl font-bold text-center p-10">
        Helamã Yamashita Barbour
      </div>
      <nav className="flex flex-wrap items-center text-base justify-center">
        <ul className="w-full justify-center text-center">
          <li className="w-full">
            <Link
              href="/"
              className="block w-full p-5 hover:bg-white hover:text-gray-900"
            >
              Home
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/about"
              className="block w-full p-5 hover:bg-white hover:text-gray-900"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
