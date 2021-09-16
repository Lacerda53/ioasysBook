import React from 'react';
import { BooksProps } from '../../@types';
import { MarksSvg } from '../../assets/svg/marksSvg';
import {
    ContainerDescription,
    InfoContainer,
    KeyValue,
    KeyValueContainer,
    MarkContainer,
    TextDescription,
    TextInfo,
    Textvalue
} from './styles';

type Props = {
    item: BooksProps;
};

export const InfoContainerDetails: React.FC<Props> = ({ item }) => {
    return (
        <InfoContainer>
            <TextInfo>INFORMAÇÕES</TextInfo>
            <KeyValueContainer>
                <KeyValue>
                    <TextInfo>Páginas</TextInfo>
                    <Textvalue>{item.pageCount} páginas</Textvalue>
                </KeyValue>
                <KeyValue>
                    <TextInfo>Editora</TextInfo>
                    <Textvalue>Editora {item.publisher}</Textvalue>
                </KeyValue>
                <KeyValue>
                    <TextInfo>Publicação</TextInfo>
                    <Textvalue>{item.published}</Textvalue>
                </KeyValue>
                <KeyValue>
                    <TextInfo>Idioma</TextInfo>
                    <Textvalue>{item.language}</Textvalue>
                </KeyValue>
                <KeyValue>
                    <TextInfo>Título Original</TextInfo>
                    <Textvalue>{item.title}</Textvalue>
                </KeyValue>
                <KeyValue>
                    <TextInfo>ISBN-10</TextInfo>
                    <Textvalue>{item.isbn10}</Textvalue>
                </KeyValue>
                <KeyValue>
                    <TextInfo>ISBN-13</TextInfo>
                    <Textvalue>{item.isbn13}</Textvalue>
                </KeyValue>
                <KeyValue>
                    <TextInfo>Categoria</TextInfo>
                    <Textvalue>{item.category}</Textvalue>
                </KeyValue>
            </KeyValueContainer>
            <KeyValueContainer>
                <TextInfo>RESENHA DA EDITORA</TextInfo>
            </KeyValueContainer>
            <ContainerDescription>
                <MarkContainer>
                    <MarksSvg />
                </MarkContainer>
                <TextDescription>{item.description}</TextDescription>
            </ContainerDescription>
        </InfoContainer>
    );
};