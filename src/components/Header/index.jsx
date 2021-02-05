import { useState } from 'react';
import Link from "next/link";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gray-800 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
            <div className="flex items-center justify-between px-4 py-3 sm:p-0">
                <div>
                    <Link href="/">
                        <img
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="HX"
                            className="h-8"
                        />
                    </Link>
                </div>
                <div className="sm:hidden">
                    <button
                        type="button"
                        className="text-gray-300 block hover:text-white focus:outline-none focus:ring-2 focus:ring-opacity-50"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="fill-current h-6 w-6"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                        </svg>
                    </button>
                </div>
            </div>
            <nav className={`${isOpen ? "block" : " hidden"} sm:block`}>
                <div className="px-2 pb-4 sm:flex sm:p-0">
                    <Link href="/create-quote">
                        <a className="block bg-blue-500 text-white hover:bg-gray-500 px-2 py-1 font-semibold rounded mt-1 sm:mt-0 sm:ml-2">
                            Create Quote
            </a>
                    </Link>
                </div>
            </nav>
        </header>
    )
}
export default Header