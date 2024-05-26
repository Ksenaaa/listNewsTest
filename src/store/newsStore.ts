import { create } from 'zustand';

import { NewPostForCreate, News, NewsCard } from 'model/news';
import { dataNews } from 'data/dataNews';

interface NewsStore {
    news: NewsCard[],
    newsPost: News | null,
    checkedPostId: string,
    getPost: (id: string) => void,
    onCheckPost: (id: string) => void,
    onDeletePost: () => void
    onSetNewPost: (dataNewPost: NewPostForCreate) => void
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
    onSetNewPost: (dataNews) => {
        const newPost = {
            ...dataNews,
            id: Math.random().toString(),
            date: new Date().toISOString(),
        }

        set((state) => ({ news: [newPost, ...state.news] }))
    }
}))

export default useNewsStore;
