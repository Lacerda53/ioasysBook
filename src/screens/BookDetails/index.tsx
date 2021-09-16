import { useNavigation, useRoute } from "@react-navigation/core";
import React from "react";
import { BooksProps } from "../../@types";
import { BackSvg } from "../../assets/svg/backSvg";
import { ButtonCircled } from "../../components/ButtonCircled";
import { InfoContainerDetails } from "../../components/InfoContainerDetails";
import { BookImage, BookImageContainer, Container, Content, Header, Subtitle, Title } from "./styles";

type RouteProps = {
    item: BooksProps;
};

export const BookDetails: React.FC = () => {
    const route = useRoute();
    const { item } = route.params as RouteProps;
    const { goBack } = useNavigation();

    return (
        <Container>
            <Header>
                <ButtonCircled onPress={goBack} >
                    <BackSvg />
                </ButtonCircled>
            </Header>
            <Content showsVerticalScrollIndicator={false}>
                <BookImageContainer>
                    <BookImage source={{ uri: item.imageUrl }} />
                </BookImageContainer>
                <Title>{item.title}</Title>
                <Subtitle>{item.authors.join(', ')}</Subtitle>
                <InfoContainerDetails item={item} />
            </Content>
        </Container>
    )
};
