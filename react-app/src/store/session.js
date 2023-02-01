const initialState = null;


const PERSONAL_SESSION = 'personal/session';
const PERSONAL_SESSION_SIGN_IN = 'personal/session/signIn';
const PERSONAL_SESSION_SIGN_UP = 'personal/session/signUp';
const PERSONAL_SESSION_SIGN_OUT = 'personal/session/signOut';


const BUSINESS_SESSION = 'business/session';
const BUSINESS_SESSION_SIGN_IN = 'business/session/signIn';
const BUSINESS_SESSION_SIGN_UP = 'business/session/signUp';
const BUSINESS_SESSION_SIGN_OUT = 'business/session/signOut';


const personalSessionAction = (account) => {
    return {
        type: PERSONAL_SESSION,
        account
    }
}


const personalSessionSignInAction = (account) => {
    return {
        type: PERSONAL_SESSION_SIGN_IN,
        account
    }
}


const personalSessionSignUpAction = () => {
    return {
        type: PERSONAL_SESSION_SIGN_UP
    }
}


const personalSessionSignOutAction = () => {
    return {
        type: PERSONAL_SESSION_SIGN_OUT
    }
}



const businessSessionAction = (account) => {
    return {
        type: PERSONAL_SESSION,
        account
    }
}


const businessSessionSignInAction = (account) => {
    return {
        type: PERSONAL_SESSION_SIGN_IN,
        account
    }
}


const businessSessionSignUpAction = () => {
    return {
        type: PERSONAL_SESSION_SIGN_UP
    }
}


const businessSessionSignOutAction = () => {
    return {
        type: PERSONAL_SESSION_SIGN_OUT
    }
}

export const personalSessionFunction = () => async (dispatch) => {
    const response = await fetch("/api/accounts/personal/session");
    const responseJSON = await response.json();
    dispatch(personalSessionAction(responseJSON));
    return responseJSON;
};
  

export const personalSessionSignInFunction = (data) => async (dispatch) => {
    const response = await fetch("/api/accounts/personal/signin", {
        method: "POST",
        headers: { "Content-Type": "application/JSON" },
        body: JSON.stringify(data),
    });
    const responseJSON = await response.json();
    dispatch(personalSessionSignInAction(responseJSON));
    return responseJSON;
};


function sessionReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case PERSONAL_SESSION:
            newState = { ...action.account };
            return newState;
        case PERSONAL_SESSION_SIGN_IN:
            newState = { ...action.account };
            return newState;
        case PERSONAL_SESSION_SIGN_UP:
            newState = state;
            return newState;
        case PERSONAL_SESSION_SIGN_OUT:
            newState = state;
            return newState;
        default:
            return state;
    }
}
  
export default sessionReducer;