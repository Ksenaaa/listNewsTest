import { View } from 'react-native';

import { CustomButton } from 'components/customButton/CustomButton';
import { ModalApp } from 'components/modal/ModalApp';
import useNewsStore from 'store/newsStore';
import { useToggle } from 'utils/hooks/useToggle';

import { stylesModalHome as styles } from './ModalHome.styles';

export const ModalHome = () => {
    const onDeletePost = useNewsStore((state) => state.onDeletePost);

    const { isOpen, onToggle } = useToggle(true);

    const handleDeletePost = () => {
        onDeletePost();
        onToggle();
    };

    return (
        <ModalApp isOpenModal={isOpen}>
            <View style={styles.modalContent}>
                <CustomButton
                    text="Delete"
                    onPress={handleDeletePost}
                    style={styles.buttonDelete}
                />
                <CustomButton text="Close" onPress={onToggle} />
            </View>
        </ModalApp>
    );
};
