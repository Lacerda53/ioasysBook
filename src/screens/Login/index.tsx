import React, { useState } from 'react';
import { Background, Container, Content, Form } from './styles';
import backgroundImg from '../../assets/background.png'
import { Alert, Keyboard, StatusBar } from 'react-native';
import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { MainButton } from '../../components/MainButton';
import { useAuth } from '../../context/authContext';

export const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const { signin } = useAuth();

    function validateEmail(text: string) {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (reg.test(text)) {

            return true;
        }

        return false;
    }

    async function handleSubmit() {
        setLoading(true);
        Keyboard.dismiss();
        if (validateEmail(email)) {
            try {

                await signin(email, password);
            } catch {

                setLoading(false);
            }
        } else {

            Alert.alert('Ops...', 'Parece que seu email está incorreto')
        }

    }

    return (
        <Container>
            <StatusBar translucent backgroundColor='transparent' />
            <Background source={backgroundImg} />
            <Content>
                <Logo />
                <Form>
                    <Input
                        label='Email'
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                    <Input
                        label='Senha'
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    >
                        <MainButton title='Entrar' loading={loading} onPress={handleSubmit} />
                    </Input>
                </Form>
            </Content>
        </Container>
    );
}