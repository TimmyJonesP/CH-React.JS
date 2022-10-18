import React, { useContext } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { CartContext } from "../../utilitys/context";

const CartWidget = () =>{
    const {cartTotal} = useContext(CartContext)
    return(
        <div>
        {cartTotal() > 0 ? <div className="inline-flex items-center"><Link to ={"/cart"}><p className="text-sm rounded-full bg-green-600">{cartTotal()}</p><FontAwesomeIcon icon={faCartShopping}/>{cartTotal}</Link> </div>: <div> </div>}
        </div>
    )
}
export default CartWidget;