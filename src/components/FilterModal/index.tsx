import React, { useCallback } from 'react';
import { ScrollView } from 'react-native';
import { categoriesBooks } from '../../services/categories';
import { MainButton } from '../MainButton';
import {
    Container,
    Content,
    FooterContainer,
    Option,
    OptionsContainer,
    OptionText,
    Title
} from './styles';

type Props = {
    category: string;
    setCategory: (value: string) => void;
    onSubmit: () => void;
};

export const FilterModal: React.FC<Props> = ({ category, setCategory, onSubmit }) => {

    const handleSelectCategory = useCallback((categorySelected) => {
        if (category === categorySelected) {
            return setCategory('')
        }

        return setCategory(categorySelected)
    }, [category]);

    return (
        <Container>
            <Content>
                <Title>Selecione a categoria</Title>
                <OptionsContainer>
                    {categoriesBooks.map((item, index) => (
                        <Option key={index} activeOpacity={.8} selected={category.includes(item.category)} onPress={() => handleSelectCategory(item.category)}>
                            <OptionText selected={category.includes(item.category)} >{item.title}</OptionText>
                        </Option>
                    ))}
                </OptionsContainer>
            </Content>
            <FooterContainer>
                <MainButton title='Filtrar' outline onPress={onSubmit} />
            </FooterContainer>
        </Container>
    );
}