import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container } from './styles';

type Props = TouchableOpacityProps & {
    children?: ReactNode;
};

export const ButtonCircled: React.FC<Props> = ({ children, ...rest }) => {
    return (
        <Container {...rest}>
            {children}
        </Container>
    );
}