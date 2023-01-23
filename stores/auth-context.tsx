import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useReducer } from "react";
import App from "../App";



export type AuthState = {
    token: string;
    isAuthenticated: boolean;
}

export type AuthActions = {
    setAuthToken: (token: string) => void;
    logout: () => void;
}

export type AuthContextType = AuthActions & AuthState;

export interface AuthAction<T> {
    type: "LOGOUT" | "SET",
    payload?: T
}

export const AuthContext = createContext<AuthContextType>({
    token: '',
    isAuthenticated: false,
    setAuthToken: () => { },
    logout: () => { },
});

const storeData = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        // saving error
    }
}

const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) {
            return value;
        }
    } catch (e) {
        // error reading value
    }
}


function expenseReducer(state: AuthState, action: AuthAction<any>) {
    switch (action.type) {
        case "SET":
            storeData("token", action.payload);
            return { ...state, token: action.payload, isAuthenticated: true };
        case "LOGOUT":
            return { ...state, isAuthenticated: false, token: '' }
        default: return state

    }
}

export default function AuthProvider({ children }: any) {

   App

    const [expensesState, dispatch] = useReducer(expenseReducer, {
        token: '',
        isAuthenticated: false
    });

    function setAuthToken(token: string) {
        dispatch({ type: 'SET', payload: token });
    }

    function logout() {
        dispatch({ type: 'LOGOUT' });
    }


    const value = {
        ...expensesState,
        setAuthToken,
        logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}