import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div>
            <nav className='flex flex-wrap items-center justify-between text-black py-2 px-4 md:px-12 lg:px-24'>
                {/* Logo Section */}
                <div className="logo md:ml-4 lg:ml-0">
                    <img
                        width={293.26}
                        height={80}
                        src="https://s3-alpha-sig.figma.com/img/153c/f988/785cdcec05510cbdc9cb1b82a17b77fc?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WkmtI038NG3RySTZWr2a6BWm8LgyFJS3X7tk8qUS8YvrE8AoRaYaOFaGxjAIRpxvBQF-Agl63fRULHr7Phhh2RBtDZHY01qZibOjQLPpM~oILlM8AfS83pXbpxfOgjGnQi9r6fqfDTVlsTFhA~8WzDzTMx0MPrqlOsFEQnWS34Cziy4-DuL5KA7kDm7DVPkmPnxtsWK3MQnugE3CjE5tgYej5VW~4za1v8TBd7C148vg6xC9j9wXxr6CsJhcFGE-OWlbRP8zkvzFauvA7SJn7WSMPv43W~B5w3i1fS6KV3GY59OoNuGuhkCnKRjS3f2GmSMYxCEr-hT0U0jl5nkRYQ__"
                        alt="Logo"
                    />
                </div>

                {/* Search Bar */}
                <div className="flex items-center mt-4 md:mt-0 md:ml-4 lg:ml-12 w-full md:w-auto md:p-5 p-0">
                    <form className="flex items-center w-full max-w-sm">
                        <input
                            type="text"
                            id="simple-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-10 p-2.5 pl-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Search here"
                            required
                        />
                        <button
                            type="submit"
                            className="w-10 h-10 p-2.5 text-sm font-medium text-white bg-[#8064A2] rounded-lg hover:bg-[#8064A2]"
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </form>
                </div>

                {/* Menu Items */}
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <button
                        className="text-black font-medium rounded-lg text-sm pr-5 py-2.5 flex items-center"
                        type="button"
                    >
                        Explore
                        <svg
                            className="w-2.5 h-2.5 ml-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>

                    {/* Dropdown for Explore */}
                    <div id="dropdown" className="z-10 hidden shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-xs text-gray-700 dark:text-gray-200">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Icons */}
                <div className='flex justify-center items-center space-x-4 mt-4 md:mt-0'>
                    <img src="/bookmark.svg" alt="Bookmark" />
                    <img src="/bell.svg" alt="Notifications" />
                    <img src="/product.svg" alt="Products" />
                </div>

                {/* Sign In Button */}
                <div className="flex items-center mt-4 md:mt-0 ml-auto">
                    <button type="button" className="text-[#8064A2] bg-white border border-[#8064A2] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-9 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        Sign In
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
