import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import AddIcon from 'assets/svg/add_round_light.svg';
import SearchIcon from 'assets/svg/search_light.svg';
import { CustomButtonIcon } from 'components/customButtonIcon/CustomButtonIcon';
import { CustomInput } from 'components/customInput/CustomInput';
import { RootStackNavigatorParamsList } from 'model/RootStackNavigatorParamsList';
import { ScreenNames } from 'utils/constants/ScreenNames';

import { stylesHeaderHome as styles } from './HeaderHome.styles';

export const HeaderHome = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigatorParamsList>>();

    const handleNavigateToNewPost = () => {
        navigation.navigate(ScreenNames.CREATE_POST);
    };

    return (
        <View style={styles.headerContainer}>
            <SearchIcon style={styles.searchIcon} />
            <CustomInput placeholder="Search" style={styles.input} />
            <CustomButtonIcon onPress={handleNavigateToNewPost}>
                <AddIcon width={30} height={30} />
            </CustomButtonIcon>
        </View>
    );
};
