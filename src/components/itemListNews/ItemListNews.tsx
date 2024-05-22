import { View } from 'react-native';

import { News } from 'model/news';

import { stylesItemListNews } from './ItemListNews.styles';

interface Props {
    item: News;
}

export const ItemListNews = ({ item }: Props) => {
    console.log('item', item);

    return <View style={stylesItemListNews.container}></View>;
};
