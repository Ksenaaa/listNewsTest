import { SafeAreaView, StyleSheet, Text } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackNavigatorParamsList } from 'model/RootStackNavigatorParamsList';
import { ScreenNames } from 'utils/constants/ScreenNames';

type Props = NativeStackScreenProps<RootStackNavigatorParamsList, ScreenNames.NEWS_POST>;

export const NewsPostScreen = ({ route }: Props) => {
    const { postId } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.sectionTitle}>{postId}</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        marginTop: 100,
        color: 'black',
    },
});
