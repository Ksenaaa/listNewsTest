import { Image, ScrollView, Text, View } from 'react-native';

import { News } from 'model/news';
import { formatDate } from 'utils/helpers/formatDate';

import { stylesPostInfo as styles } from './PostInfo.styles';

interface Props {
    newsPost: News;
}

export const PostInfo = ({ newsPost }: Props) => {
    return (
        <ScrollView>
            <View style={styles.wrapperImg}>
                {/* // TODO: customize pictures */}
                {/* <Image style={styles.img} source={{ uri: newsPost.img }} /> */}
                <Image style={styles.img} source={require('assets/jpg/img_news.jpeg')} />
            </View>
            <View style={styles.wrapperDesc}>
                <Text style={styles.descDate}>{formatDate(newsPost.date)}</Text>
                <Text style={styles.descText}>{newsPost.description}</Text>
            </View>
        </ScrollView>
    );
};
