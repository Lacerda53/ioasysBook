import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useCallback } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { BooksProps, RoutesEnum } from '../../@types';
import { RootStackParamList } from '../../routes/stack.routes';
import ItemBookList from '../ItemBookList';
import { Loader } from '../Loader';
import { Container, Separator } from './styles';

type Props = {
    loading: boolean;
    page: number;
    listBooks: BooksProps[];
    isRender: boolean;
    refresh: boolean;
    onRefresh: () => void;
    onEndReachedThreshold: () => void;
};

type StackScreenProp = NativeStackNavigationProp<RootStackParamList, 'BookDetails'>;

export const ListBooks: React.FC<Props> = ({
    loading = false,
    page,
    listBooks,
    isRender = false,
    refresh = false,
    onRefresh,
    onEndReachedThreshold
}) => {
    const { navigate } = useNavigation<StackScreenProp>();

    const renderItem = useCallback(({ item }) => (
        <ItemBookList key={String(item.id)} item={item} onPress={() => navigate('BookDetails', { item })} />
    ), [navigate]);

    const ListFooterComponent = useCallback(() => loading ? <Loader /> : null, [loading]);

    const ItemSeparatorComponent = useCallback(() => <Separator />, []);

    const keyExtractor = useCallback(item => item.id.toString(), []);

    if (loading && page === 1) {

        return <Loader />;
    }

    return (
        <Container>
            <FlatList
                refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}
                keyExtractor={keyExtractor}
                removeClippedSubviews={true}
                showsVerticalScrollIndicator={false}
                data={listBooks}
                initialNumToRender={5}
                extraData={isRender}
                renderItem={renderItem}
                ItemSeparatorComponent={ItemSeparatorComponent}
                onEndReachedThreshold={0.6}
                onEndReached={onEndReachedThreshold}
                ListFooterComponent={ListFooterComponent}
            />
        </Container>
    );
}