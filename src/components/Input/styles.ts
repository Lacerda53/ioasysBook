import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

export const Container = styled.View`
    width: 100%;
    height: 70px;
    flex-direction: row;
    border-radius: 4px;
    margin-bottom: 18px;
    background: ${theme.colors.backgroundInput};
`;

export const Label = styled.Text`
    opacity: .5;
    padding: 10px 20px;
    color: ${theme.colors.white};
`;

export const Content = styled.View`
    flex: 1;
`;

export const ContainerChildren = styled.View`
    margin-right: 16px;
    justify-content: center;
    align-items: center;
`;

export const TextInput = styled.TextInput`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    margin-top: 10px;
    font-size: 17px;
    color: ${theme.colors.white};
`;