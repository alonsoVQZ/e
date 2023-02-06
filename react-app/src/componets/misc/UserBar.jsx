
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import './style/UserBar.css'

function UserBar() {
    useEffect(() => {

    }, [])
    return (
        <div id='UserBar'>
            <Anonymus />
        </div>
    )
}

function Anonymus() {
    const [dropdown, setDropdown] = useState(false)
    return (
        <div id='Anonymus' onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
            <span className="headerspantop">Hello, sign in</span>
            <span className="headerspanbot">Accounts & Lists</span>
            {
                dropdown && (
                    <div id='Anonymus-d1'>
                        <NavLink to={'/signin'}>Sign In</NavLink>
                        <span>New costumer? <NavLink to={'/signup'}>Start here.</NavLink></span>
                    </div>
                )
            }
        </div>
    )
}

// function Anonymus() {
//     return (
//         <div id='Anonymus'>
//             <span>Hello, sign in</span>
//             <span>Accounts & Lists</span>
//         </div>
//     )
// }


export default UserBar;