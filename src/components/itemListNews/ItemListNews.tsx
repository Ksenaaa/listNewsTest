import { Image, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackNavigatorParamsList } from 'model/RootStackNavigatorParamsList';
import { NewsCard } from 'model/news';
import { ScreenNames } from 'utils/constants/ScreenNames';

import { stylesItemListNews as styles } from './ItemListNews.styles';

interface Props {
    item: NewsCard;
}

export const ItemListNews = ({ item }: Props) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigatorParamsList>>();

    const handleNavigateToPost = () => {
        navigation.navigate(ScreenNames.NEWS_POST, { postId: item.id });
    };

    return (
        <TouchableOpacity style={styles.container} onPress={handleNavigateToPost}>
            <View style={styles.wrapperImg}>
                <Image style={styles.img} source={require('assets/jpg/img_news.jpeg')} />
            </View>
            <View style={styles.wrapperDesc}>
                <Text style={styles.descTitle} numberOfLines={1}>
                    {item.title}
                </Text>
                <Text style={styles.descText} numberOfLines={1}>
                    {item.description}
                </Text>
                <Text style={styles.descTimeAgo}>{item.date}</Text>
            </View>
        </TouchableOpacity>
    );
};
