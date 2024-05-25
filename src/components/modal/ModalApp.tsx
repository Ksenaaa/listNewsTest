import { PropsWithChildren } from 'react';
import { Modal, View } from 'react-native';

import { stylesModalApp as styles } from './ModalApp.styles';

interface Props {
    isOpenModal: boolean;
    onClose: () => void;
}

export const ModalApp = ({ isOpenModal, onClose, children }: PropsWithChildren<Props>) => {
    return (
        <Modal animationType="slide" visible={isOpenModal} transparent onRequestClose={onClose}>
            <View style={styles.container}>
                <View style={styles.backgroundOverlay} />
                <View style={styles.containerModal}>
                    <View style={styles.line}></View>
                    <View style={styles.content}>{children}</View>
                </View>
            </View>
        </Modal>
    );
};
