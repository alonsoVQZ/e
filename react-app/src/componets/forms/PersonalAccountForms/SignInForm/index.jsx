import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate  } from "react-router-dom";

import { personalSessionSignInFunction } from "../../../../store/session";

import './style/SignInForm.css'

function SignInForm() {
    const [form, setForm] = useState()
    useEffect(() => {
        setForm(<SignInPersonalAccountEmail { ...{ setForm } }/>)
    }, [])
    return (
        <div id="SignInPersonalAccount">
            <h1>Sign in</h1>
            { form }
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
    const navigate = useNavigate();
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
        const responseJSON = await dispatch(personalSessionSignInFunction({ ...data, password }))
        if(responseJSON.error) {
            setBackendErrors(responseJSON.error)
            setShowBackendErrors(true)
        } else {
            navigate('/')
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

export default SignInForm;