import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import { ClosetSvg } from '../../../assets/svg/closeSvg';
import { ToastMessage, useToast } from '../../../context/toastContext';
import {
	Container,
	View,
	Title,
	Description,
	CloseToast
} from './styles';

type ToastProps = {
	message: ToastMessage;
	position: Animated.Value;
};

export const Toast: React.FC<ToastProps> = ({ message, position }) => {
	const { removeToast } = useToast();

	useEffect(() => {

		if (message.description) {

			const timer = setTimeout(() => {
				removeToast();
			}, 10000);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [removeToast, message.description]);

	function handleClose() {

		Animated.timing(position, {
			toValue: -200,
			duration: 300,
			useNativeDriver: true,
			easing: Easing.linear
		}).start(() => removeToast());
	}

	return (
		<Container
			type={message.type}
			hasDescription={!!message.description}
			style={{ transform: [{ translateY: position }] }}
		>
			<CloseToast onPress={handleClose}>

				<View>
					<Title>{message.title}</Title>
				</View>

				{message.description && <Description>{message.description}</Description>}
			</CloseToast>
		</Container>
	);
};
