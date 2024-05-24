import { FlatList } from 'react-native';

import { ItemListNews } from 'components/itemListNews/ItemListNews';
import { NoResults } from 'components/noResults/NoResults';
import useNewsStore from 'store/newsStore';
import { useToggle } from 'utils/hooks/useToggle';

export const ListNews = () => {
    const news = useNewsStore((state) => state.news);

    const { onOpen: onOpenModal } = useToggle();

    return (
        <FlatList
            data={news}
            renderItem={({ item }) => <ItemListNews item={item} onOpenModalManager={onOpenModal} />}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={<NoResults />}
        />
    );
};
