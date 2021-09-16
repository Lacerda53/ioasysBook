import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosResponse } from "axios";
import { api } from "./api";

export function loginService(email: string, password: string): Promise<AxiosResponse> {

    return api.post('/auth/sign-in', {
        email,
        password
    });
}

export async function refreshTokenService(){
    const refreshToken = await AsyncStorage.getItem('@IoasysBook:refresh-token')

    return api.post('​/auth​/refresh-token', {
        refreshToken
    });
}