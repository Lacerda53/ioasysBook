import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('screen');

export const Container = styled.View`
    flex: 1;
`;

export const Content = styled.View`
    position: absolute;
    padding: 0 5%;
    width: 100%;
    left: 0;
    top: ${height / 3}px;
`;

export const Form = styled.View`
    margin-top: 48px;
`;

export const Background = styled.Image.attrs({
    resizeMode: 'cover'
})`
    position: absolute;
    width: 100%;
    height: 100%;
`;
