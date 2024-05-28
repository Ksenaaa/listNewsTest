import { create } from 'zustand';

import { NewPostForCreate, News, NewsCard } from 'model/news';
import { dataNews } from 'data/dataNews';

interface NewsStore {
    news: NewsCard[],
    newsPost: News | null,
    checkedPostId: string,
    searchText: string,
    refreshing: boolean,
    getPost: (id: string) => void,
    onCheckPost: (id: string) => void,
    onDeletePost: () => void,
    onSetNewPost: (dataNewPost: NewPostForCreate) => void,
    onSearchPost: (text: string) => void,
    onRefreshNews: () => void
}

const useNewsStore = create<NewsStore>((set, get) => ({
    news: dataNews,
    newsPost: null,
    checkedPostId: '',
    searchText: '',
    refreshing: false,
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
        set((state) => ({
            news: state.news.filter(news => news.id !== get().checkedPostId),
            checkedPostId: ''
        }))
    },
    onSetNewPost: (dataNewPost) => {
        const newPost = {
            ...dataNewPost,
            id: Math.random().toString(),
            date: new Date().toISOString(),
        }

        set({
            news: [newPost, ...dataNews],
            searchText: ''
        })
    },
    onSearchPost: (text) => {
        const textToLower = text.toLowerCase();
        const foundPosts = dataNews
            .filter(post => post.title.toLowerCase().includes(textToLower) || post.description.toLowerCase().includes(textToLower));

        set({
            news: foundPosts,
            searchText: text
        })
    },
    onRefreshNews: () => {
        set({
            refreshing: true
        });

        const newData = dataNews;

        set({
            news: newData,
            refreshing: false,
            searchText: ''
        });
    }
}))

export default useNewsStore;
