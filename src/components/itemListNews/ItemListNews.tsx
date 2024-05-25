import { Image, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackNavigatorParamsList } from 'model/RootStackNavigatorParamsList';
import { NewsCard } from 'model/news';
import useNewsStore from 'store/newsStore';
import { ScreenNames } from 'utils/constants/ScreenNames';
import { formatDateAgo } from 'utils/helpers/formatDateAgo';

import { stylesItemListNews as styles } from './ItemListNews.styles';

interface Props {
    item: NewsCard;
    onOpenModalManager: () => void;
}

export const ItemListNews = ({ item, onOpenModalManager }: Props) => {
    const getPost = useNewsStore((state) => state.getPost);
    const onCheckPost = useNewsStore((state) => state.onCheckPost);

    const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigatorParamsList>>();

    const handleNavigateToPost = () => {
        getPost(item.id);
        navigation.navigate(ScreenNames.NEWS_POST, { postTitle: item.title });
    };

    const handleLongPress = () => {
        onCheckPost(item.id);
        onOpenModalManager();
    };

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={handleNavigateToPost}
            onLongPress={handleLongPress}
        >
            <View style={styles.wrapperImg}>
                {/* // TODO: customize pictures */}
                {/* <Image style={styles.img} source={{ uri: item.img }} /> */}
                <Image style={styles.img} source={require('assets/jpg/img_news.jpeg')} />
            </View>
            <View style={styles.wrapperDesc}>
                <Text style={styles.descTitle} numberOfLines={1}>
                    {item.title}
                </Text>
                <Text style={styles.descText} numberOfLines={1}>
                    {item.description}
                </Text>
                <Text style={styles.descTimeAgo}>{formatDateAgo(item.date)}</Text>
            </View>
        </TouchableOpacity>
    );
};
