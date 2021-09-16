import React, { Children, ReactNode } from 'react';
import { Modal, ModalProps, ScrollView } from 'react-native';
import { ClosetSvg } from '../../assets/svg/closeSvg';
import { ButtonCircled } from '../ButtonCircled';
import { Card, Container, Content, Header } from './styles';

type Props = ModalProps & {
    children: ReactNode;
}

export const ModalContainer: React.FC<Props> = ({ children, onRequestClose, ...rest }) => {
    return (
        <Modal
            transparent
            animationType="fade"
            {...rest}
        >
            <Container onPress={onRequestClose} activeOpacity={1} />
            <Content>
                <Card>
                    <Header>
                        <ButtonCircled onPress={onRequestClose}>
                            <ClosetSvg />
                        </ButtonCircled>
                    </Header>
                    {children}
                </Card>
            </Content>
        </Modal>
    );
}