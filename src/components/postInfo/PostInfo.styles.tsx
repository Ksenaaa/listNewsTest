import { StyleSheet } from 'react-native';

import { Colors } from 'utils/constants/Colors';
import { TypographyStyles } from 'utils/constants/Typography';

export const stylesPostInfo = StyleSheet.create({
    wrapperImg: {
        overflow: 'hidden',
        height: 380,
    },
    img: {
        width: '100%',
        height: '100%',
    },
    wrapperDesc: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 26,
        backgroundColor: Colors.white,
        borderRadius: 42,
        transform: 'translateY(-40px)',
    },
    descDate: {
        marginBottom: 15,
        ...TypographyStyles.extraLight,
    },
    descText: {
        ...TypographyStyles.light,
    },
});
