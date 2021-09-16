import React, { useCallback, useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { BooksProps } from '../../@types';
import { FilterSvg } from '../../assets/svg/filterSvg';
import { LogoutSvg } from '../../assets/svg/logout';
import { ButtonCircled } from '../../components/ButtonCircled';
import { FilterModal } from '../../components/FilterModal';
import { ListBooks } from '../../components/ListBooks';
import { Logo } from '../../components/Logo';
import { ModalContainer } from '../../components/ModalContainer';
import { Search } from '../../components/Search';
import { useAuth } from '../../context/authContext';
import { listBooksService } from '../../services/bookService';
import { ButtonFilter, Container, Header, SearchContainer } from './styles';

export const Home: React.FC = () => {
    const { logout } = useAuth()
    const [loading, setLoading] = useState<boolean>(true);
    const [refresh, setRefresh] = useState<boolean>(false);
    const [isRender, setIsRender] = useState<boolean>(false);
    const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [query, setQuery] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [totalItems, setTotalItems] = useState<number>(0);
    const [listBooks, setListBooks] = useState<BooksProps[]>([]);

    useEffect(() => {

        function loadChecklist() {
            const newQuery = query ? query : undefined;
            const newCategory = category ? category : undefined;
            listBooksService(page, newCategory, newQuery).then(response => {
                if (response) {
                    setListBooks(item => [...item, ...response.data.data]);
                    setTotalItems(response.data.totalItems);
                }
            }).finally(() => {
                setLoading(false);
                setRefresh(false);
            });
        }

        loadChecklist();
    }, [page, isRender]);

    const onRefresh = useCallback(() => {

        Keyboard.dismiss();
        setRefresh(true);
        setModalIsVisible(false)
        setPage(1);
        setListBooks([]);
        setIsRender(x => !x);
    }, []);

    const handleSearch = useCallback(() => {

        if(query)
        {
            onRefresh()
        }
    }, [query]);

    const onEndReachedThreshold = useCallback(() => {

        if (listBooks.length !== totalItems) {
            setLoading(true);

            return setPage(p => p + 1);
        }
    }, [listBooks, totalItems]);

    return (
        <Container>
            <Header>
                <Logo color='#333' />
                <ButtonCircled onPress={logout}>
                    <LogoutSvg />
                </ButtonCircled>
            </Header>
            <SearchContainer>
                <Search
                    placeholder='Procure um livro'
                    value={query}
                    onChangeText={setQuery}
                    onPress={handleSearch}
                    autoCorrect={false}
                />
                <ButtonFilter onPress={() => setModalIsVisible(true)}>
                    <FilterSvg />
                </ButtonFilter>
            </SearchContainer>
            <ListBooks
                isRender={isRender}
                listBooks={listBooks}
                page={page}
                refresh={refresh}
                onRefresh={onRefresh}
                onEndReachedThreshold={onEndReachedThreshold}
                loading={loading}

            />
            <ModalContainer visible={modalIsVisible} onRequestClose={() => setModalIsVisible(false)}>
                <FilterModal category={category} setCategory={setCategory} onSubmit={onRefresh} />
            </ModalContainer>
        </Container>
    );
}