import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

export const Container = styled.View`
    flex: 1;
    padding: 0 15px;
`;

export const Content = styled.View`
`;

export const Title = styled.Text`
    color: ${theme.colors.secondary};
    font-family: ${theme.fonts.title};
    font-size: 16px;
`;

export const OptionsContainer = styled.View`
    flex: 1;
    padding-top: 10px;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 20px;
`;

type OptionsProps = {
    selected: boolean;
};

export const Option = styled.TouchableOpacity<OptionsProps>`
    padding: 8px 15px;
    border: 1px solid rgba(51, 51, 51, 0.3);
    border-radius: 44px;
    justify-content: center;
    align-items: center;
    margin: 5px 5px;
    background: ${props=> props.selected ? `${theme.colors.secondary}`: `${theme.colors.white}`};
`;

export const OptionText = styled.Text<OptionsProps>`
    color: ${props=> props.selected ? `${theme.colors.white}`: `${theme.colors.secondary}`};
    font-family: ${theme.fonts.text};
    font-size: 14px;
`;

export const FooterContainer = styled.View`
    width: 35%;
    margin: 0 auto;
    padding-bottom: 15px;
`;