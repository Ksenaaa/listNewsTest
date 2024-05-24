import { StyleSheet } from 'react-native';

import { Colors } from 'utils/constants/Colors';
import { TypographyStyles } from 'utils/constants/Typography';

export const stylesNoResults = StyleSheet.create({
    wrapperTextNoResults: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50%',
    },
    textNoResults: {
        marginTop: 29,
        ...TypographyStyles.light,
        color: Colors.greyLight,
    },
});
