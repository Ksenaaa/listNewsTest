import { StyleSheet } from 'react-native';

import { Colors } from 'utils/constants/Colors';
import { TypographyStyles } from 'utils/constants/Typography';

export const stylesHeaderWithBack = StyleSheet.create({
    headerContainer: {
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        position: 'relative',
    },
    button: {
        position: 'absolute',
        top: 22,
        left: 23,
        zIndex: 10,
    },
    titile: {
        flex: 1,
        textAlign: 'center',
        paddingHorizontal: 80,
        ...TypographyStyles.semobold,
    },
});
