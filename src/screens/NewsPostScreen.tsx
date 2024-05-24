import { ContainerPage } from 'components/containerPage/ContainerPage';
import { Loader } from 'components/loader/Loader';
import { PostInfo } from 'components/postInfo/PostInfo';
import useNewsStore from 'store/newsStore';

export const NewsPostScreen = () => {
    const newsPost = useNewsStore((state) => state.newsPost);

    return (
        <ContainerPage>{newsPost ? <PostInfo newsPost={newsPost} /> : <Loader />}</ContainerPage>
    );
};
