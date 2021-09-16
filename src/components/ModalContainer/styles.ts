import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

export const Container = styled.TouchableOpacity`
    flex: 1;
	align-items: center;
	justify-content: center;
	background-color: rgba(0,0,0,0.4);
	position: absolute;
	width: 100%;
	height: 100%;
`;

export const Header = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    padding: 15px 15px 0 15px;
`;

export const Content = styled.View`
    flex: 1;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const Card = styled.View`
    background-color: ${theme.colors.white};
	min-height: 100px;
	width: 90%;
	border-radius: 4px;
	overflow: hidden;
	position: absolute;
`;