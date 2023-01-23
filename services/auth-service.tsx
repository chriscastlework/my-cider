import axios from "axios";

const modeReplaceString = "<ACTION>";
const apiKey = "AIzaSyD_nw1IevFx-i6K9HaEEutcmfMkZFdaEKg";
const endpointSignUp = `https://identitytoolkit.googleapis.com/v1/accounts:${modeReplaceString}?key=${apiKey}`;

export interface CreateUserProps {
    mode: "signUp" | "signInWithPassword";
    email: string;
    password: string;
    returnSecureToken: boolean
}

export async function postAuth(data: CreateUserProps){
    const response = await axios.post(endpointSignUp.replace(modeReplaceString, data.mode), {
        email: data.email,
        password: data.password,
        returnSecureToken: data.returnSecureToken
    });
    const  token = response.data.idToken
    return token
}
