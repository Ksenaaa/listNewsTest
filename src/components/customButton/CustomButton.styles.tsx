import { StyleSheet } from 'react-native';

import { Colors } from 'utils/constants/Colors';
import { TypographyStyles } from 'utils/constants/Typography';

export const stylesCustomButton = StyleSheet.create({
    body: {
        height: 63,
        width: '100%',
        borderRadius: 10,
        backgroundColor: Colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
    },
    disabled: {
        backgroundColor: Colors.bluelight,
    },
    text: {
        ...TypographyStyles.bold,
        color: Colors.white,
    },
});
