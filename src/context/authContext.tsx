import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';
import { loginService } from '../services/authService';

type AuthContextData = {
    user: UserProps;
    loading: boolean;
    signin: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
};

type UserProps = {
    id: string;
    name: string;
    birthdate: string;
    gender: string;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<UserProps>({} as UserProps);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function loadStoragedData(): Promise<void> {
            const [token, user] = await AsyncStorage.multiGet([
                '@IoasysBook:token',
                '@IoasysBook:user'
            ]);

            if (token[1] && user[1]) {
                api.defaults.headers.common.Authorization = `Bearer ${token[1]}`;

                setUser(JSON.parse(user[1]));
            }
            setLoading(false);
        }
        loadStoragedData().catch(() => console.error('Não foi possível carregar o token'));
    }, []);

    const signin = useCallback(async (email, password) => {
        try {
            const response = await loginService(email, password);
            api.defaults.headers.common.Authorization = `Bearer ${response.headers.authorization}`;
            await AsyncStorage.setItem('@IoasysBook:refresh-token', response.headers['refresh-token']);
            await AsyncStorage.setItem('@IoasysBook:user', JSON.stringify(response.data));
            await AsyncStorage.setItem('@IoasysBook:token', response.headers.authorization);
            setUser(response.data);
        } catch {

            setUser({} as UserProps)
        }
    }, [loginService])

    const logout = useCallback(async () => {
        await AsyncStorage.clear()
        setUser({} as UserProps)
    }, [loginService])

    return (
        <AuthContext.Provider value={{ user, loading, signin, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }

    return context;
}