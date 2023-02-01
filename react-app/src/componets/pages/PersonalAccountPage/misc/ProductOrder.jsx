import { useEffect, useState } from "react";
import { Routes, Route, NavLink } from 'react-router-dom';


import './style/ProductOrder.css'


function ProductOrder() {
    const options = [];
    for (let index = 1; index <= 30; index++) {
        options.push(index)
    }
    return (
        <div id='ProductOrder'>
            <div id='ProductOrder-d1'>
                <span id='ProductOrder-d1d1'>$</span>
                <span id='ProductOrder-d1d2'>89</span>
                <span id='ProductOrder-d1d3'>99</span>
            </div>
            <span id='ProductOrder-s1'>In Stock</span>
            <div id='ProductOrder-d2'>
                <span id='ProductOrder-d2s1'>Qty:</span>
                <select id='ProductOrder-d2sel1'>
                    {
                        options.map((value) => <option value={value}>{value}</option>)
                    }
                </select>
            </div>
            <NavLink id='ProductOrder-NL1'>Add to Cart</NavLink>
            <NavLink id='ProductOrder-NL2'>Buy Now</NavLink>
        </div>
    )
}


export default ProductOrder;