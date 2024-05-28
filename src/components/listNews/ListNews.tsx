import { FlatList, RefreshControl } from 'react-native';

import { ItemListNews } from 'components/itemListNews/ItemListNews';
import { NoResults } from 'components/noResults/NoResults';
import useNewsStore from 'store/newsStore';
import { Colors } from 'utils/constants/Colors';

export const ListNews = () => {
    const news = useNewsStore((state) => state.news);
    const refreshing = useNewsStore((state) => state.refreshing);
    const onRefreshNews = useNewsStore((state) => state.onRefreshNews);

    return (
        <FlatList
            data={news}
            renderItem={({ item }) => <ItemListNews item={item} />}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={<NoResults />}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefreshNews}
                    colors={[Colors.blue]}
                    tintColor={Colors.blue}
                />
            }
        />
    );
};
