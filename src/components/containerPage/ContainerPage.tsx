import { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native';

import { stylesContainerPage as styles } from './ContainerPage.styles';

export const ContainerPage = ({ children }: PropsWithChildren) => {
    return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};
