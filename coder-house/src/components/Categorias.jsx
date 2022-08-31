import React from "react";
import { Component } from "react";

class Categorias extends Component{
    render(){
        return(
        <li>
            <a href="/">{this.props.valor}</a>
        </li>
        )
    }
}
export default Categorias