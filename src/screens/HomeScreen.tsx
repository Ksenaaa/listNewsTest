import { ContainerPage } from 'components/containerPage/ContainerPage';
import { HeaderHome } from 'components/headerHome/HeaderHome';
import { ListNews } from 'components/listNews/ListNews';
import { ModalHome } from 'components/modalHome/ModalHome';
import { useToggle } from 'utils/hooks/useToggle';

export const HomeScreen = () => {
    const { isOpen: isOpenModal, onToggle: onToggleModal } = useToggle();

    return (
        <ContainerPage>
            <HeaderHome />
            <ListNews onOpenModal={onToggleModal} />
            <ModalHome isOpenModal={isOpenModal} onCloseModal={onToggleModal} />
        </ContainerPage>
    );
};
