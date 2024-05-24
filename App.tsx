import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { Navigator } from 'navigator/Navigator';

function App(): React.JSX.Element {
    return (
        <NavigationContainer>
            <Navigator />
        </NavigationContainer>
    );
}

export default App;
