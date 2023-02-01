import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import './style/CartBar.css';

function CartBar() {
    return (
        <div id='CartBar'>
            <span>image</span>
            <span className="headerspanbot">Cart</span>
        </div>
    )
}


export default CartBar;