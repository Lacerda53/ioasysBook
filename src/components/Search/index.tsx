import React from 'react';
import { GestureResponderEvent, TextInputProps } from 'react-native';
import { ButtonSearch, Container, ContainerInput, InputText, SearchIcon } from './styles';

type Props = TextInputProps & {
    onPress: (event: GestureResponderEvent) => void;
}

export const Search: React.FC<Props> = ({ onPress, value, ...rest }) => {
    return (
        <Container>
            <ContainerInput>
                <InputText {...rest} placeholderTextColor='#999' />
            </ContainerInput>
            <ButtonSearch onPress={onPress} activeOpacity={.8}>
                <SearchIcon />
            </ButtonSearch>
        </Container>
    );
}