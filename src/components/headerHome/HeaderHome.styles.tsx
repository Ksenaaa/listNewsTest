import { StyleSheet } from 'react-native';

export const stylesHeaderHome = StyleSheet.create({
    headerContainer: {
        marginTop: 30,
        marginHorizontal: 30,
        marginBottom: 20,
        height: 48,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
    },
    searchIcon: {
        position: 'absolute',
        left: 14,
        top: 11,
    },
    input: {
        paddingLeft: 48,
        paddingRight: 14,
    },
});
