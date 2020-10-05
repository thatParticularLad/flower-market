const initialUserState = {
    firstname: '',
    password: '',
    email: '',
    user: null,
}

export function userReducer(state = initialUserState, action) {
    switch (action.type) {
        case 'SET_FIRSTNAME':
            return {
                ...state,
                firstname: action.payload
            }
        case 'PASSWORD':
            return {
                ...state,
                password: action.payload
            }
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.payload
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.payload

            }
        default:
            return state
    }
}