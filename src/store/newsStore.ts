import { create } from 'zustand';

import { NewsCard } from 'model/news';

interface NewsStore {
    news: NewsCard[],
    addNews: (dataNews: NewsCard[]) => void
}

const useNewsStore = create<NewsStore>((set) => ({
    news: [],
    addNews: (dataNews) => {
        set({
            news: dataNews
        });
    }
})
);

export default useNewsStore;
