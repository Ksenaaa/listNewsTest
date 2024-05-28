import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import ArrowIcon from 'assets/svg/arrow_left.svg';
import { CustomButtonIcon } from 'components/customButtonIcon/CustomButtonIcon';
import { RootStackNavigatorParamsList } from 'model/RootStackNavigatorParamsList';

import { stylesHeaderWithBack as styles } from './HeaderWithBack.styles';

interface Props {
    title: string;
}

export const HeaderWithBack = ({ title }: Props) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigatorParamsList>>();

    const handleNavigateToBack = () => {
        navigation.goBack();
    };

    const insets = useSafeAreaInsets();

    return (
        <View
            style={[
                styles.headerContainer,
                {
                    height: insets.top + 70,
                    paddingTop: insets.top,
                },
            ]}
        >
            <View style={[styles.button, { top: insets.top + 10 }]}>
                <CustomButtonIcon onPress={handleNavigateToBack}>
                    <ArrowIcon width={30} height={30} />
                </CustomButtonIcon>
            </View>
            <Text style={styles.titile} numberOfLines={1} ellipsizeMode="tail">
                {title}
            </Text>
        </View>
    );
};
