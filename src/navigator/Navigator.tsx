import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HeaderWithBack } from 'components/headerWithBack/HeaderWithBack';
import { RootStackNavigatorParamsList } from 'model/RootStackNavigatorParamsList';
import { CreatePostScreen } from 'screens/CreatePostScreen';
import { HomeScreen } from 'screens/HomeScreen';
import { ModalHomeScreen } from 'screens/ModalHomeScreen';
import { NewsPostScreen } from 'screens/NewsPostScreen';
import { ScreenNames } from 'utils/constants/ScreenNames';

const Stack = createNativeStackNavigator<RootStackNavigatorParamsList>();

export const Navigator = () => {
    return (
        <Stack.Navigator initialRouteName={ScreenNames.HOME}>
            <Stack.Screen
                name={ScreenNames.HOME}
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ScreenNames.CREATE_POST}
                component={CreatePostScreen}
                options={{
                    header: () => <HeaderWithBack title={'New post'} />,
                }}
            />
            <Stack.Screen
                name={ScreenNames.NEWS_POST}
                component={NewsPostScreen}
                options={({ route }) => ({
                    header: () => <HeaderWithBack title={route.params.postTitle} />,
                })}
            />
            <Stack.Screen
                options={{ presentation: 'containedTransparentModal', headerShown: false }}
                name={ScreenNames.MODAL_HOME}
                component={ModalHomeScreen}
            />
        </Stack.Navigator>
    );
};
