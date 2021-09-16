import { Dimensions, Platform } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

const { height } = Dimensions.get('screen')

export const Container = styled.View`
    padding: 30px 20px;
    margin-top: ${Platform.OS === 'ios' ? '30px' : '0px'};
`;

export const Header = styled.View`
    width: 100%;
`;

export const Content = styled.ScrollView`
    padding: 20px 30px;
    width: 100%;
`;

export const Title = styled.Text`
    width: 100%;
    text-align: center;
    padding-top: 20px;
    font-family: ${theme.fonts.title};
    color: ${theme.colors.secondary};
    font-size: 28px;
`;

export const Subtitle = styled.Text`
    width: 100%;
    text-align: center;
    font-family: ${theme.fonts.text};
    color: ${theme.colors.primary};
`;

export const BookImage = styled.Image`
    width: 100%;
    height: 100%;
`;

export const BookImageContainer = styled.View`
    width: ${height/3}px;
    height: ${height/2}px;
    margin: 0 auto;
    background: ${theme.colors.white};
    elevation: 5;
    shadow-opacity: 0.65;
    shadow-radius: 8px;
    shadow-color: rgba(0, 0, 0, 0.3);
    shadow-offset: 10px 20px;
`;