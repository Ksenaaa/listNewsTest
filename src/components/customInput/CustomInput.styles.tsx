import { StyleSheet } from 'react-native';

import { Colors } from 'utils/constants/Colors';
import { TypographyStyles } from 'utils/constants/Typography';

export const stylesCustomInput = StyleSheet.create({
    containerInput: {
        flex: 1,
    },
    input: {
        flex: 1,
        borderRadius: 10,
        ...TypographyStyles.regular,
        backgroundColor: Colors.greyLightTransparent15,
    },
});
