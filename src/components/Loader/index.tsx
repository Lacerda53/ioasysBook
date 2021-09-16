import React from 'react';
import { ActivityIndicatorProps } from 'react-native';
import { theme } from '../../styles/theme';
import { Container } from './styles';

type Props = ActivityIndicatorProps & {
    size?: string;
    color?: string;
}

export const Loader: React.FC<Props> = ({ size = 'large', color = theme.colors.secondary, ...rest }) => {
    return <Container size={size} color={color} {...rest} />;
}