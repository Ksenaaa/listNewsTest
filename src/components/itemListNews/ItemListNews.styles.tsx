import { StyleSheet } from 'react-native';

import { Colors } from 'utils/constants/Colors';
import { TypographyStyles } from 'utils/constants/Typography';

export const stylesItemListNews = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        marginHorizontal: 30,
        marginVertical: 20,
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: Colors.greyLight,
        shadowOffset: {
            width: 1,
            height: 5,
        },
        elevation: 10,
    },
    wrapperImg: {
        overflow: 'hidden',
        height: 195,
    },
    img: {
        width: '100%',
        height: '100%',
    },
    wrapperDesc: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 18.2,
    },
    descTitle: {
        marginBottom: 10,
        ...TypographyStyles.semobold,
    },
    descText: {
        marginBottom: 5,
        ...TypographyStyles.light,
    },
    descTimeAgo: {
        ...TypographyStyles.extraLight,
        color: Colors.grey,
    },
});
