import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

export const Container = styled.View`
    flex-direction: row;
`;

type TextLogoProps = {
    color: string;
};

export const TextLogo = styled.Text<TextLogoProps>`
    font-size: 28px;
    margin-left: 16px;
    color: ${props => props.color};
    font-family: ${theme.fonts.logo};
`;