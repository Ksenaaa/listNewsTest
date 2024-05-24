import { SafeAreaView, StyleSheet, Text } from 'react-native';

export const CreatePostScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.sectionTitle}>{'CreatePostScreen'}</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        marginTop: 100,
        color: 'black',
    },
});
