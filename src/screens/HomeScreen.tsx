import { ContainerPage } from 'components/containerPage/ContainerPage';
import { HeaderHome } from 'components/headerHome/HeaderHome';
import { ListNews } from 'components/listNews/ListNews';

export const HomeScreen = () => {
    return (
        <ContainerPage>
            <HeaderHome />
            <ListNews />
        </ContainerPage>
    );
};
