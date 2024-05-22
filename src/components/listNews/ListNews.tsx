import { FlatList } from 'react-native';

import { ItemListNews } from 'components/itemListNews/ItemListNews';
import useNewsStore from 'store/newsStore';

import { stylesListNews } from './ListNews.styles';

export const ListNews = () => {
    const news = useNewsStore((state) => state.news);

    return (
        <FlatList
            style={stylesListNews.container}
            data={news}
            renderItem={({ item }) => <ItemListNews item={item} />}
            keyExtractor={(item) => item.id}
        />
    );
};
