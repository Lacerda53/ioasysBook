import React from 'react';
import { Background } from './styles';
import backgroundImg from '../../assets/background.png'

export const Splash: React.FC = () => {
    return (
        <Background source={backgroundImg} />
    );
}