import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { userSignInFunction } from "../../../../store/user"

import './style/SignInForm.css'

function SignUpForm() {
    return (
        <div id="SignInPersonalAccount">
            <h1>Create account</h1>
            <form>
                <div>
                    <label for="">Your Name</label>
                    <input type="" name="" value="" placeholder="First and last name"/>
                    {
                        false && <span>Error</span>
                    }
                </div>
                <div>
                    <label for="">Email</label>
                    <input type="" name="" value="" />
                    {
                        false && <span>Error</span>
                    }
                </div>
                <div>
                    <label for="">Password</label>
                    <input type="" name="" value="" placeholder="At least 6 characteres"/>
                    {
                        false && <span>Error</span>
                    }
                </div>
                <div>
                    <label for="">Re-enter password</label>
                    <input type="" name="" value="" />
                    {
                        false && <span>Error</span>
                    }
                </div>
                <button type="button">Sign Up</button>
            </form>
            <span>By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.</span>
            <div>
                    <span>Already have an account? <NavLink to={'/signin'}>Sign in</NavLink></span>
                    <span>Buying for work? <NavLink to={'/business/signup'}>Create a free business account</NavLink></span>
            </div>
        </div>
    )
}


function SignInPersonalAccountEmail({ setForm }) {
    const [backendErrors, setBackendErrors] = useState("")
    const [showBackendErrors, setShowBackendErrors] = useState(false)
    const [frontendErrors, setFrontendErrors] = useState("")
    const [showFrontendErrors, setShowFrontendErrors] = useState(false)
    const [email, setEmail] = useState("")

    const handleContinue = async () => {
        if(frontendErrors.length > 0) {
            setShowBackendErrors(false)
            setShowFrontendErrors(true)
            return
        }
        const response = await fetch("/api/accounts/personal/email", {
            method: "POST",
            headers: { "Content-Type": "application/JSON" },
            body: JSON.stringify({ "email": email }),
        });
        const responseJSON = await response.json();
        if(responseJSON.error) {
            setBackendErrors(responseJSON.error)
            setShowBackendErrors(true)
        } else {
            setForm(<SignInPersonalAccountPassword { ...{ setForm, data: responseJSON  } }/>)
        }
        return
    }

    useEffect(() => {
        const errors = [];
        if(email.length === 0) errors.push('- Enter your email')
        if(errors.length === 0) setShowFrontendErrors(false)
        setFrontendErrors(errors)
    }, [email]);
    return (
        <div>
            {
                showBackendErrors && <span>{backendErrors}</span>
            }
            <form className="class-SignInForm">
                <label for="">Email</label>
                <input type="email" name="" value={email} onChange={(e) => setEmail(e.target.value)}/>
                {
                    showFrontendErrors && <span>Enter your email</span>
                }
                <button type="button" onClick={(e) => handleContinue(e)}>Continue</button>
            </form>
            <span>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</span>
        </div>
    )
}


function SignInPersonalAccountPassword({ setForm, data }) {
    const dispatch = useDispatch();


    const [backendErrors, setBackendErrors] = useState("")
    const [showBackendErrors, setShowBackendErrors] = useState(false)
    const [frontendErrors, setFrontendErrors] = useState("")
    const [showFrontendErrors, setShowFrontendErrors] = useState(false)
    const [password, setPassword] = useState("")


    const handleCahnge = () => {
        setForm(<SignInPersonalAccountEmail { ...{ setForm } }/>)
        return
    }


    const handleSignIn = async () => {
        if(frontendErrors) {
            setShowBackendErrors(false)
            setShowFrontendErrors(true)
            return
        }
        const responseJSON = await dispatch(userSignInFunction({ ...data, password }))
        if(responseJSON.error) {
            setBackendErrors(responseJSON.error)
            setShowBackendErrors(true)
        } else {

        }
        return
    }

    
    useEffect(() => {
        if(!password) {
            setFrontendErrors('Enter your password')
        }
        if(password.length > 0) {
            setFrontendErrors('')
            setShowFrontendErrors(false)
        }
    }, [password]);


    return (
        <div>
            {
                showBackendErrors && <span>{backendErrors}</span>
            }
            <p>{ data.email } <span onClick={(e) => handleCahnge(e)}>Change</span></p>
            <form className="class-SignInForm">
                <div>
                    <label for="">Password</label>
                    <span>Forgot your password?</span>
                </div>
                <input type="password" name="" value={password} onChange={(e) => setPassword(e.target.value)}/>
                {
                    showFrontendErrors && <span>Enter your password</span>
                }
                <button type="button" onClick={(e) => handleSignIn(e)}>Sign In</button>
                <div>
                    <input type="checkbox" name="" value="" />
                    <span>Keep me signed in. Details</span>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm;