import { News } from 'model/news';
import { create } from 'zustand';

interface NewsStore {
    news: News[],
    addNews: (dataNews: News[]) => void
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
