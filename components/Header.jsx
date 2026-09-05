import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white-600 text-white-600 body-font">
            <div id='header-title' className="text-2xl font-bold">
                Helamã Yamashita Barbour
            </div>
            <nav className="flex flex-wrap items-center text-base justify-center">
                <ul>
                    <li>
                        <Link href="/home" className="mr-5 hover:text-gray-900">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="mr-5 hover:text-gray-900">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}