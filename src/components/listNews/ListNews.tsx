import { FlatList } from 'react-native';

import { ItemListNews } from 'components/itemListNews/ItemListNews';
import { NoResults } from 'components/noResults/NoResults';
import useNewsStore from 'store/newsStore';

interface Props {
    onOpenModal: () => void;
}

export const ListNews = ({ onOpenModal }: Props) => {
    const news = useNewsStore((state) => state.news);

    return (
        <FlatList
            data={news}
            renderItem={({ item }) => <ItemListNews item={item} onOpenModalManager={onOpenModal} />}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={<NoResults />}
        />
    );
};
