import {
    NativeSyntheticEvent,
    TextInput,
    TextInputContentSizeChangeEventData,
    View,
    ViewStyle,
} from 'react-native';

import { Colors } from 'utils/constants/Colors';

import { stylesCustomInput as styles } from './CustomInput.styles';

interface Props {
    placeholder?: string;
    value?: string;
    isMultiline?: boolean;
    style?: ViewStyle;
    onChange?: (text: string) => void;
    onSetSize?: (sizeHeight: number) => void;
}

export const CustomInput = ({
    placeholder,
    value,
    isMultiline,
    style,
    onChange,
    onSetSize,
}: Props) => {
    const handleContentSizeChange = (
        event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>
    ) => {
        if (!isMultiline || !onSetSize) return;

        const { contentSize } = event.nativeEvent;
        onSetSize(contentSize.height);
    };

    return (
        <View style={styles.containerInput}>
            <TextInput
                style={[styles.input, style]}
                onChangeText={onChange}
                multiline={isMultiline}
                onContentSizeChange={handleContentSizeChange}
                numberOfLines={4}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={Colors.grey}
                textAlignVertical="top"
            />
        </View>
    );
};
