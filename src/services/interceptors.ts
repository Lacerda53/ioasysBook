import axios, { AxiosError } from 'axios';
import { useToast } from '../context/toastContext';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from '../services/api';
import { refreshTokenService } from './authService';
import { useAuth } from '../context/authContext';

export const InitializeInterceptors: () => void = () => {
	const { logout } = useAuth();
	const { addToast } = useToast();

	function Error(err: AxiosError) {
		return new Promise(async (resolve, reject) => {
			const originalReq = err.config;

			if (err.response?.status === 401 && err.config) {

				addToast({ err });

				try {
					refreshTokenService().then(async response => {

						console.log(response.data)
						if (response.status === 204) {
							api.defaults.headers.common.Authorization = `Bearer ${response.headers.authorization}`;
							await AsyncStorage.setItem('@IoasysBook:refresh-token', response.headers['refresh-token']);
							await AsyncStorage.setItem('@IoasysBook:user', JSON.stringify(response.data));
							await AsyncStorage.setItem('@IoasysBook:token', response.headers.authorization);

							return axios(originalReq);
						}
					})

				} catch {

					resolve(err);
					return logout();
				}
			}

			return reject(err);
		});
	}

	api.interceptors.response.use(response => response, Error);
};