import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {
    return (
        // <NavigationContainer>
        <View style={styles.container}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: 'black',
                    },
                ]}
            >
                {'Step   jnffej ij lOne'}
            </Text>
        </View>
        // </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        marginTop: 100,
    },
});

export default App;
