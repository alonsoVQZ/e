import { useEffect, useState } from "react";
import { Routes, Route, NavLink } from 'react-router-dom';

import './style/ProductInformation.css'

const name = 'KingTool 325 Piece Home Repair Tool Kit, General Home/Auto Repair Tool Set, Toolbox Storage Case with Drawer, General Household Tool Kit - Perfect for Homeowner, Diyer, Handyman'
const store = 'KINGTOOL'
const num_ratings = 450

function ProductInformation() {
    return (
        <div id='ProductInformation'>
            <div id='ProductInformation-d1'>
                <span id='ProductInformation-d1s1'>{ name }</span>
                <NavLink id='ProductInformation-d1NL1'>Visit the { store } Store</NavLink>
                <div id='ProductInformation-d1d1'>
                    <span id='ProductInformation-d1d1s1'>*****</span>
                    <span id='ProductInformation-d1d1s2'>{num_ratings} ratings</span>
                </div>
            </div>
            <div id='ProductInformation-d2'>
                <div id='ProductInformation-d2d1'>
                    <div id='ProductInformation-d2d1d1'>
                         <span id='ProductInformation-d2d1d1s1'>-17%</span>
                         <div id='ProductInformation-d2d1d1d1'>
                            <span id='ProductInformation-d2d1d1d1s1'>$</span>
                            <span id='ProductInformation-d2d1d1d1s2'>89</span>
                            <span id='ProductInformation-d2d1d1d1s3'>99</span>
                         </div>
                    </div>
                    <div id='ProductInformation-d2d1d2'>
                        <span id='ProductInformation-d2d1d2s1'>List Price: </span>
                        <span id='ProductInformation-d2d1d2s2'>$108.99</span>
                    </div>
                </div>
                <div id='ProductInformation-d2d2'>

                </div>
            </div>
        </div>
    )
}


export default ProductInformation;