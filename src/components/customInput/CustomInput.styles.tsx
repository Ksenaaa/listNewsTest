import { StyleSheet } from 'react-native';

import { Colors } from 'utils/constants/Colors';

export const stylesCustomInput = StyleSheet.create({
    containerInput: {
        flex: 1,
    },
    input: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
        padding: 14,
        backgroundColor: Colors.greyLightTransparent15,
    },
});
