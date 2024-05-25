import { StyleSheet } from 'react-native';

import { Colors } from 'utils/constants/Colors';

export const stylesModalApp = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    backgroundOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: Colors.backgroundOverlay,
    },
    containerModal: {
        backgroundColor: Colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
    },
    line: {
        width: 40,
        height: 5,
        borderRadius: 30,
        marginTop: 13,
        backgroundColor: Colors.grey,
        opacity: 0.3,
    },
    content: {
        padding: 33,
        width: '100%',
    },
});
