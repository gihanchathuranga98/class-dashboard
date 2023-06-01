import {createContext} from 'react'


const INITIAL_STATE = {
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
    role: 0,
    token: null,
    id: null,
    name: null

}

export const AuthContext = createContext(INITIAL_STATE);