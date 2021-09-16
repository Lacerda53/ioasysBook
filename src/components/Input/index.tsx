import React, { ReactNode } from 'react';
import { TextInputProps } from 'react-native';
import { Container, ContainerChildren, Content, Label, TextInput } from './styles';

type Props = TextInputProps & {
    label: string;
    children?: ReactNode;
}

export const Input: React.FC<Props> = ({ label, children, ...rest }) => {
    return (
        <Container>
            <Content>
                <Label>{label}</Label>
                <TextInput {...rest} />
            </Content>
            {children && (
                <ContainerChildren>
                    {children}
                </ContainerChildren>
            )}
        </Container>
    );
}