import React, { useContext } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { CartContext } from "../../utilitys/context";

const CartWidget = () =>{
    const {cartTotal} = useContext(CartContext)
    return(
        <div>
        {cartTotal() > 0 ? <Link to ={"/cart"}><p className="bg-color-red">{cartTotal()}</p><FontAwesomeIcon icon={faCartShopping}/>{cartTotal}</Link> : <div> </div>}
        </div>
    )
}
export default CartWidget;