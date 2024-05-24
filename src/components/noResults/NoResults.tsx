import { Text, View } from 'react-native';

import NoDataImage from 'assets/svg/img_no_data.svg';

import { stylesNoResults as styles } from './NoResults.styles';

export const NoResults = () => {
    return (
        <View style={styles.wrapperTextNoResults}>
            <NoDataImage width={225} />
            <Text style={styles.textNoResults}>No results found</Text>
        </View>
    );
};
