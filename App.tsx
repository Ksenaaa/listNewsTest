import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';

import { Navigator } from 'navigator/Navigator';

function App(): React.JSX.Element {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Navigator />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

export default App;
