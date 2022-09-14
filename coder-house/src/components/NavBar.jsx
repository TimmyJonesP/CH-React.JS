import React from "react";
import { Link } from "react-router-dom";
import logo from '../media/enoteca.png';
import CartWidget from "./Cart/CartWidget";


const NavBar = () => {
    return(

            <div className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
                <Link to='/'>
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-[Poppins] cursor-pointer">
                        <img className="h-10 mx-5 inline" src={ logo } alt="Enoteca, cultura en vinos" />
                    </span>
                </div>
                </Link>

                <ul className="md:flex md:items-center">
                    <li className="mx-4">
                        <Link to='/'><p className="text-cl hover:text-red-900 duration-500">INICIO</p></Link>
                    </li>
                    <li className="mx-4">
                        <Link to='/category/vino'><p className="text-cl hover:text-red-900 duration-500">VINOS</p></Link>
                    </li>
                    <li className="mx-4">
                        <Link to='/category/blancos'><p className="text-cl hover:text-red-900 duration-500">LICORES Y BREBAJES </p></Link>
                    </li>
                </ul>
                <CartWidget/>
            </div>
    )
}

export default NavBar;