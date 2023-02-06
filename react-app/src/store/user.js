const initialState = null;


const USER_SESSION = 'user/session';
const USER_SIGN_IN = 'user/signIn';
const USER_SIGN_UP = 'user/signUp';
const USER_SIGN_OUT = 'user/signOut';


const userSessionAction = (account) => {
    return {
        type: USER_SESSION,
        account
    }
}


const userSignInAction = (account) => {
    return {
        type: USER_SIGN_IN,
        account
    }
}


const userSignUpAction = () => {
    return {
        type: USER_SIGN_UP,
    }
}


const userSignOutAction = () => {
    return {
        type: USER_SIGN_OUT,
    }
}



export const userSessionFunction = () => async (dispatch) => {
    const response = await fetch("/api/user/session");
    const responseJSON = await response.json();
    dispatch(userSessionAction(responseJSON));
    return responseJSON;
};
  

export const userSignInFunction = (data) => async (dispatch) => {
    const response = await fetch("/api/user/signin", {
        method: "POST",
        headers: { "Content-Type": "application/JSON" },
        body: JSON.stringify(data),
    });
    const responseJSON = await response.json();
    dispatch(userSignInAction(responseJSON));
    return responseJSON;
};


function userReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case USER_SESSION:
            newState = { ...action.account };
            return newState;
        case USER_SIGN_IN:
            newState = { ...action.account };
            return newState;
        case USER_SIGN_UP:
            newState = state;
            return newState;
        case USER_SIGN_OUT:
            newState = state;
            return newState;
        default:
            return state;
    }
}
  
export default userReducer;