import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

type ContainerProps = {
    outline: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
    padding: 10px 25px;
    background: ${theme.colors.white};
    justify-content: center;
    align-items: center;
    border-radius: 44px;
    border: ${props=> props.outline ? `2px solid ${theme.colors.primary}` : '0'};
`;

export const TextButton = styled.Text`
    font-size: 18px;
    font-family: ${theme.fonts.title};
    color: ${theme.colors.primary}
`;
