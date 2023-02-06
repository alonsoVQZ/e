
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import './style/OrdersBar.css';

function OrdersBar() {
    const navigate  = useNavigate()
    return (
        <div id='OrdersBar' onClick={() => navigate('/orders')}>
            <span className="headerspantop">Returns</span>
            <span className="headerspanbot">& Orders</span>
        </div>
    )
}


export default OrdersBar;