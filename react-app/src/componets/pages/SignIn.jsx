import { NavLink } from "react-router-dom";

import SignInForm from '../forms/UserForms/SignInForm'

import './style/SignIn.css'


function SignIn() {
    return (
        <div id='SignIn'>
            <img src="/amazon-logo.png" alt="amazon-logo" style={ { width: '100px'} }/>
            <SignInForm />
            <div>
                <div>
                    <div></div>
                    <span>
                        New to amazon?
                    </span>
                    <div></div>
                </div>
                <NavLink to={"/signup"}>
                    Create your Amazon account
                </NavLink>
            </div>
            <div id='SignIn-d2'>
                <ul>
                    <li>Conditions of Use</li>
                    <li>Privacy Notice</li>
                    <li>Help</li>
                </ul>
                <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
            </div>
        </div>
    )
}


export default SignIn;