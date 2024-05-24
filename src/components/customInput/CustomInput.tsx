import { TextInput, View, ViewStyle } from 'react-native';

import { stylesCustomInput as styles } from './CustomInput.styles';

interface Props {
    placeholder?: string;
    value?: string;
    isMultiline?: boolean;
    onChange?: () => void;
    style?: ViewStyle;
}

export const CustomInput = ({ placeholder, onChange, value, isMultiline, style }: Props) => {
    return (
        <View style={styles.containerInput}>
            <TextInput
                style={[styles.input, style]}
                onChangeText={onChange}
                multiline={isMultiline}
                numberOfLines={4}
                maxLength={40}
                value={value}
                placeholder={placeholder}
                keyboardType="numeric"
            />
        </View>
    );
};
