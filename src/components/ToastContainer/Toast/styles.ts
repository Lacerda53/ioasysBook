import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { theme } from '../../../styles/theme';

type ContainerProps = {
	type?: 'success' | 'error' | 'info';
	hasDescription: boolean;
};

export const Container = styled(Animated.View)<ContainerProps>`
	width: 100%;
	position: relative;
	padding: 16px 30px 16px 16px;
	border-radius: 10px;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
	display: ${props=> props.hasDescription? 'flex': 'none'};
	margin-bottom: 10px;
	background: white;
`;

export const View = styled.View`
	flex: 1;
	flex-direction: row;
	align-items: center;
	padding-top: 4px;
`;

export const Title = styled.Text`
    font-size: 18px;
    opacity: 0.8;
    line-height: 20px;
	color: ${theme.colors.primary};
`;

export const Description = styled.Text`
	margin-top: 4px;
    font-size: 15px;
    opacity: 0.8;
    line-height: 20px;
	color: ${theme.colors.secondary};
`;

export const CloseToast = styled.TouchableOpacity`
	flex: 1;
`;