import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

export const InfoContainer = styled.View`
    width: 100%;
    padding: 40px 0;
    margin-bottom: 50px;
`;

export const Textvalue = styled.Text`
    font-family: ${theme.fonts.text};
    color: ${theme.colors.text};
`;

export const TextInfo = styled.Text`
    font-family: ${theme.fonts.title};
    color: ${theme.colors.secondary};
`;

export const KeyValueContainer = styled.View`
    padding-top: 20px;
`;

export const KeyValue = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const MarkContainer = styled.View`
    padding: 30px 10px 5px 0;
`;

export const ContainerDescription = styled.Text`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const TextDescription = styled.Text`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.text};
    font-size: 14px;
`;