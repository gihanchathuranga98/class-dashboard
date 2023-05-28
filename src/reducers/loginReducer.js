

export const actions = {
    SET_EMAIL: 'SET_EMAIL',
    SET_PASSWORD: 'SET_PASSWORD',
    SET_VALIDITY: 'SET_VALIDITY',
    SET_OPEN: 'SET_OPEN',
    SET_OPEN_INFO: 'SET_OPEN_INFO',
    SET_LOADER: 'SET_LOADER'
}

export const INITIAL_STATE = {
    email: '',
    password: '',
    validity: '',
    open: false,
    open_info: false,
    loader: false
}

export const loginReducer = (state, action) => {
    switch(action.type){
        case actions.SET_EMAIL:
            return {
                ...state,
                email: action.payload
            }

        case actions.SET_PASSWORD:
            return {
                ...state,
                password: action.payload
            }

        case actions.SET_LOADER:
            return {
                ...state,
                loader: action.payload
            }

        case actions.SET_OPEN_INFO:
            return {
                ...state,
                open_info: action.payload
            }

        case actions.SET_VALIDITY:
            return {
                ...state,
                validity: action.payload
            }

        default: 
            return state
    }
}