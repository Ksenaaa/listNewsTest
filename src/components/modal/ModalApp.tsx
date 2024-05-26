import { PropsWithChildren, useEffect, useState } from 'react';
import { Animated, Easing, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackNavigatorParamsList } from 'model/RootStackNavigatorParamsList';

import { stylesModalApp as styles } from './ModalApp.styles';

interface Props {
    isOpenModal: boolean;
}

export const ModalApp = ({ isOpenModal, children }: PropsWithChildren<Props>) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigatorParamsList>>();

    const translateY = useState(new Animated.Value(2000))[0];

    useEffect(() => {
        if (isOpenModal) {
            Animated.timing(translateY, {
                toValue: 0,
                duration: 500,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(translateY, {
                toValue: 1000,
                duration: 300,
                easing: Easing.in(Easing.ease),
                useNativeDriver: true,
            }).start(() => {
                navigation.goBack();
            });
        }
    }, [isOpenModal]);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.backgroundOverlay, { transform: [{ translateY }] }]} />
            <Animated.View style={[styles.containerModal, { transform: [{ translateY }] }]}>
                <View style={styles.line}></View>
                <View style={styles.content}>{children}</View>
            </Animated.View>
        </View>
    );
};
