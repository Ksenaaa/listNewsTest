import { create } from 'zustand';

import { News, NewsCard } from 'model/news';
import { dataNews } from 'data/dataNews';

interface NewsStore {
    news: NewsCard[],
    newsPost: News | null,
    checkedPostId: string,
    getPost: (id: string) => void,
    onCheckPost: (id: string) => void,
    onDeletePost: () => void
    addNews: (dataNews: NewsCard[]) => void
}

const useNewsStore = create<NewsStore>((set, get) => ({
    news: dataNews,
    newsPost: null,
    checkedPostId: '',
    getPost: (id) => {
        const foundPost = get().news.filter(news => news.id === id)[0]
        set({
            newsPost: foundPost
        });
    },
    onCheckPost: (id) => {
        set({
            checkedPostId: id
        });
    },
    onDeletePost: () => {
        set({
            news: get().news.filter(news => news.id !== get().checkedPostId),
            checkedPostId: ''
        });
    },
    addNews: (dataNews) => {
        set({
            news: dataNews
        });
    }
})
);

export default useNewsStore;
