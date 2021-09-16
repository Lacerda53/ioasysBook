import React, { useEffect, useCallback } from 'react';
import { Container } from './styles';
import { ToastMessage } from '../../context/toastContext';
import { Toast } from './Toast';
import { Animated, Easing } from 'react-native';

type ToastContainerProps = {
	message: ToastMessage;
};

export const ToastContainer: React.FC<ToastContainerProps> = ({ message }) => {
	const pos = React.useRef(new Animated.Value(-200)).current;

	const showAnimation = useCallback(() => {
		Animated.timing(pos, {
			toValue: 1,
			duration: 300,
			useNativeDriver: true,
			easing: Easing.linear
		}).start();
	}, [pos]);

	const hideAnimation = useCallback(() => {
		Animated.timing(pos, {
			toValue: -200,
			duration: 200,
			useNativeDriver: true,
			easing: Easing.linear
		}).start();
	}, [pos]);

	useEffect(() => {

		if (message.description) {

			showAnimation();
			const timer = setTimeout(() => {
				hideAnimation();
			}, 9700);

			return () => {
				clearTimeout(timer);
				hideAnimation();
			};
		}
	}, [pos, message.description, hideAnimation, showAnimation]);

	return (
		<Container>
			<Toast message={message} position={pos} />
		</Container>
	);
};