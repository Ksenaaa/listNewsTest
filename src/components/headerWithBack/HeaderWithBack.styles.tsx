import { StyleSheet } from 'react-native';

import { Colors } from 'utils/constants/Colors';
import { TypographyStyles } from 'utils/constants/Typography';

export const stylesHeaderWithBack = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        paddingHorizontal: 80,
        position: 'relative',
    },
    button: {
        position: 'absolute',
        left: 23,
        zIndex: 10,
    },
    titile: {
        flex: 1,
        textAlign: 'center',
        ...TypographyStyles.semobold,
    },
});
