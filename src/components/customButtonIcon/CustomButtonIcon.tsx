import { PropsWithChildren } from 'react';
import { TouchableOpacity } from 'react-native';

import { stylesCustomButtonIcon as styles } from './CustomButtonIcon.styles';

interface Props {
    onPress?: () => void;
    isDisabled?: boolean;
}

export const CustomButtonIcon = ({ onPress, isDisabled, children }: PropsWithChildren<Props>) => {
    return (
        <TouchableOpacity
            style={[styles.body, isDisabled && styles.disabled]}
            onPress={onPress}
            disabled={isDisabled}
        >
            {children}
        </TouchableOpacity>
    );
};
