import styled from 'styled-components/native';
import { theme } from '../../styles/theme';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('screen');

export const Container = styled.TouchableOpacity`
    width: 90%;
    margin: 0 auto;
    padding: 20px;
    border-radius: 5px;
    background: ${theme.colors.white};
    flex-direction: row;
    elevation: 5;
    shadow-opacity: 0.75;
    shadow-radius: 5px;
    shadow-color: rgba(84, 16, 95, 0.13);
    shadow-offset: 5px 5px;
`;

export const Content = styled.View`
    padding-left: 20px;
    flex: 1;
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.title};
    font-size: 16px;
    color: ${theme.colors.secondary};
`;

export const Subtitle = styled.Text`
    font-family: ${theme.fonts.text};
    font-size: 13px;
    color: ${theme.colors.primary};
    flex: 1;
`;

export const Subdescription = styled.Text`
    flex: 1;
    font-family: ${theme.fonts.text};
    flex-direction: column;
    font-family: ${theme.fonts.text};
    font-size: 13px;
    color: ${theme.colors.text};
`;

export const BookImage = styled.Image.attrs({
    resizeMode: 'cover'
})`
    width: 100%;
    height: 100%;
`;

export const BookImageContainer = styled.View`
    width: ${height / 9}px;
    height: ${height / 6}px;
    background: ${theme.colors.white};
    elevation: 5;
    shadow-opacity: 0.75;
    shadow-radius: 5px;
    shadow-color: rgba(84, 16, 95, 0.13);
    shadow-offset: 5px 5px;
`;