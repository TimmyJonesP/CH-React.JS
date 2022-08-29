import React from "react";
import logo from '../media/enoteca.png'

const NavBar = () => {
    return(

            <div className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-[Poppins] cursor-pointer">
                        <img className="h-10 mx-5 inline" src={ logo } alt="Enoteca, cultura en vinos" />
                    </span>
                    
                </div>

                <ul className="md:flex md:items-center">
                    <li className="mx-4">
                        <a href="#" className="text-cl hover:text-red-900 duration-500">INICIO</a>
                    </li>
                    <li className="mx-4">
                        <a href="#" className="text-cl hover:text-red-900 duration-500">VINOS</a>
                    </li>
                    <li className="mx-4">
                        <a href="#" className="text-cl hover:text-red-900 duration-500">LICORES Y BREBAJES </a>
                    </li>
                    <li className="mx-4">
                        <a href="#" className="text-cl hover:text-red-900 duration-500">Nosotros</a>
                    </li>
                </ul>
            </div>
    )
}

export default NavBar;