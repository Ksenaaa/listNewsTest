import { Text, TouchableOpacity, ViewStyle } from 'react-native';

import { stylesCustomButton as styles } from './CustomButton.styles';

interface Props {
    onPress?: () => void;
    isDisabled?: boolean;
    text: string;
    style?: ViewStyle;
}

export const CustomButton = ({ onPress, isDisabled, text, style }: Props) => {
    return (
        <TouchableOpacity
            style={[styles.body, isDisabled && styles.disabled, style]}
            onPress={onPress}
            disabled={isDisabled}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};
