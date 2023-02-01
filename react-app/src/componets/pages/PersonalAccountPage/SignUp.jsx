import SignUpForm from '../../forms/PersonalAccountForms/SignUpForm';

import './style/SignUp.css'


function SignUp() {
    return (
        <div id="SignUp">
            <img src="/amazon-logo.png" alt="amazon-logo" style={ { width: '100px'} }/>
            <SignUpForm />
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


export default SignUp;