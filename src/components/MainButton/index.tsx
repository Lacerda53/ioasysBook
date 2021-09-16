import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Loader } from '../Loader';
import { Container, TextButton } from './styles';

type Props = TouchableOpacityProps & {
    title: string;
    loading?: boolean;
    outline?: boolean;
};

export const MainButton: React.FC<Props> = ({ title, loading = false, outline = false, ...rest }) => {
    return (
        <Container {...rest} outline={outline} activeOpacity={.8}>
            {loading
                ? <Loader size='small' />
                : <TextButton>{title}</TextButton>
            }
        </Container>
    );
}