import { NavLink } from "react-router-dom";

import SearchBar from "./SearchBar";
import UserBar from "./UserBar";
import OrdersBar from "./OrdersBar";
import CartBar from "./CartBar";

import './style/Header.css'

function Header() {
    return (
        <div id='Header'>
            <div id='Header-d1'>
                <div id='Header-d1d1'>
                    <img src="/amazon-logo-white.png" alt="" style={ { height: '40px' } }/>

                </div>
                <div id='Header-d1d2'>
                    <SearchBar />
                </div>
                <div id='Header-d1d3'>
                    <UserBar />
                    <OrdersBar />
                    <CartBar />
                </div>
            </div>
            <nav id='Header-n1'>
                <ul id='Header-n1ul1'>
                    <li className="Header-list">All</li>
                    <li className="Header-list">Customer Service</li>
                    <li className="Header-list">Best Sellers</li>
                    <li className="Header-list">Amazon Basics</li>
                    <li className="Header-list">Today's Deals</li>
                    <li className="Header-list">Prime</li>
                    <li className="Header-list">New Releases</li>
                </ul>
            </nav>
        </div>
    )
}


export default Header;