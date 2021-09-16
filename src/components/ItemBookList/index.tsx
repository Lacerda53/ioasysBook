import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { BooksProps } from '../../@types';
import {
    BookImage,
    BookImageContainer,
    Container,
    Content,
    Subdescription,
    Subtitle,
    Title
} from './styles';

type Props = TouchableOpacityProps & {
    item: BooksProps
};

const ItemBookList: React.FC<Props> = ({ item, ...rest }) => {
    return (
        <Container {...rest} activeOpacity={0.9}>
            <BookImageContainer>
                <BookImage source={{ uri: item.imageUrl }} />
            </BookImageContainer>
            <Content>
                <Title>{item.title}</Title>
                <Subtitle>{item.authors.join(', ')}</Subtitle>
                <Subdescription>
                    {`${item.pageCount} páginas\n`}
                    {`Editora ${item.publisher}\n`}
                    {`Publicado em ${item.published}`}
                </Subdescription>
            </Content>
        </Container>
    );
}

export default ItemBookList;