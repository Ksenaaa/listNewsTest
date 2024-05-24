import { FlatList } from 'react-native';

import { ItemListNews } from 'components/itemListNews/ItemListNews';
import { NoResults } from 'components/noResults/NoResults';
import useNewsStore from 'store/newsStore';

export const ListNews = () => {
    const news = useNewsStore((state) => state.news);

    return (
        <FlatList
            data={news}
            renderItem={({ item }) => <ItemListNews item={item} />}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={<NoResults />}
        />
    );
};
