import React from 'react';
import { IoasysLogo } from '../IoasysLogo';
import { Container, TextLogo } from './styles';

type Props = {
    color?: string;
}

export const Logo: React.FC<Props> = ({ color = '#fff' }) => {
    return (
        <Container>
            <IoasysLogo color={color} />
            <TextLogo color={color} >Books</TextLogo>
        </Container>
    );
}