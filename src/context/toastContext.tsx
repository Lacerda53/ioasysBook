import { AxiosError } from 'axios';
import { ToastContainer } from '../components/ToastContainer';
import React, {
	createContext,
	useContext,
	useCallback,
	useState
} from 'react';

export type ToastMessage = {
	type?: 'success' | 'error' | 'info';
	title?: string;
	description?: string;
	err?: AxiosError;
};

type ToastContextData = {
	addToast: (message: ToastMessage) => void;
	removeToast(): void;
};

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
	const [messages, setMessages] = useState<ToastMessage>({} as ToastMessage);

	function addToast({ type, title = '', description, err }: ToastMessage) {
		if (err) {
			title = 'Ops...';
			type = 'error';

			if (err.response?.data.errors.message) {

				description = err.response?.data.errors.message;
			}

			if (err.message === 'Network Error') {

				description = 'Não foi possível carregas as informações. Verifique sua conexão e tente novamente';
			}
		}

		setMessages({
			type,
			title,
			description
		});
	}

	const removeToast = useCallback(() => {
		setMessages({} as ToastMessage);
	}, []);

	return (
		<ToastContext.Provider value={{ addToast, removeToast }}>
			{children}
			<ToastContainer message={messages} />
		</ToastContext.Provider>
	);
};

export function useToast(): ToastContextData {
	const context = useContext(ToastContext);

	if (!context) {
		throw new Error('useToast must be used within ToastProvider');
	}

	return context;
}