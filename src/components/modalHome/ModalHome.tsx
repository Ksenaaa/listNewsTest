import { View } from 'react-native';

import { CustomButton } from 'components/customButton/CustomButton';
import { ModalApp } from 'components/modal/ModalApp';
import useNewsStore from 'store/newsStore';

import { stylesModalHome as styles } from './ModalHome.styles';

interface Props {
    isOpenModal: boolean;
    onCloseModal: () => void;
}

export const ModalHome = ({ isOpenModal, onCloseModal }: Props) => {
    const onDeletePost = useNewsStore((state) => state.onDeletePost);

    const handleDeletePost = () => {
        onDeletePost();
        onCloseModal();
    };

    return (
        <ModalApp isOpenModal={isOpenModal} onClose={onCloseModal}>
            <View style={styles.modalContent}>
                <CustomButton
                    text="Delete"
                    onPress={handleDeletePost}
                    style={styles.buttonDelete}
                />
                <CustomButton text="Close" onPress={onCloseModal} />
            </View>
        </ModalApp>
    );
};
