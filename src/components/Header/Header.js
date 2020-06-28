import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <>
            <header
                className="fixed bg-gray-800 shadow-md border-t-4 border-purple-500  z-50 w-full px-5 py-2 flex justify-between items-center">

                <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg  viewBox="0 0 16 16" className="w-10 h-10 text-white p-2 "
                              fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M15 13H1v2h14v-2zM1 12a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H1zm14-5H1v2h14V7zM1 6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H1z"/>
                            <path fill-rule="evenodd"
                                  d="M13 10H3v2h10v-2zM3 9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3zm10-5H3v2h10V4zM3 3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3z"/>
                            <path fill-rule="evenodd"
                                  d="M15 1H1v2h14V1zM1 0a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1z"/>
                            <path fill-rule="evenodd"
                                  d="M5.5 1v2h-1V1h1zm6 0v2h-1V1h1zm-4 5V4h1v2h-1zm-2 1v2h-1V7h1zm6 0v2h-1V7h1zm-4 5v-2h1v2h-1zm-3 3v-2h1v2h-1zm6 0v-2h1v2h-1z"/>
                        </svg>
                        <span className="ml-3 text-xl text-white"><span
                            className="opacity-50">Eğitim</span><span>Meğitim.com</span></span>
                    </div>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l text-white md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <Link to="/" className="mr-5 hover:text-purple-400">Anasayfa</Link>
                        <Link to="/" className="mr-5 hover:text-purple-400">Hakkımızda</Link>
                        <Link to="/" className="mr-5 hover:text-purple-400">İletişim</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;