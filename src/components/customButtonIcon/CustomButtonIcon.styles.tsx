import { StyleSheet } from 'react-native';

import { Colors } from 'utils/constants/Colors';

export const stylesCustomButtonIcon = StyleSheet.create({
    body: {
        height: 47,
        width: 47,
        borderRadius: 30,
        backgroundColor: Colors.greyLightTransparent25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    disabled: {
        backgroundColor: Colors.greyLightTransparent15,
    },
});
