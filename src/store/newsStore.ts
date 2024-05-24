import { create } from 'zustand';

import { News, NewsCard } from 'model/news';

interface NewsStore {
    news: NewsCard[],
    newsPost: News | null,
    getPost: (id: string) => void,
    addNews: (dataNews: NewsCard[]) => void
}

const dataNews = [
    {
        id: '1',
        title: 'Discovery by scientists',
        description: `Scientific research has uncovered a new mystery lurking in the depths of the ocean. As scientists delve deeper into the unexplored realms of the underwater world, they have stumbled upon a perplexing phenomenon that challenges our understanding of marine ecosystems. This latest discovery has ignited curiosity and raised questions about the intricate interplay between marine life and their environments.
        At the heart of this mystery lies an enigmatic species of bioluminescent jellyfish found thriving in the abyssal plains of the Pacific Ocean. Unlike their counterparts in shallower waters, these jellyfish exhibit unique luminescent patterns that seem to pulsate with an otherworldly glow. Initial observations suggest that these patterns may serve a crucial yet cryptic purpose, perhaps linked to communication, camouflage, or even defense mechanisms.
        At the heart of this mystery lies an enigmatic species of bioluminescent jellyfish found thriving in the abyssal plains of the Pacific Ocean. Unlike their counterparts in shallower waters, these jellyfish exhibit unique luminescent patterns that seem to pulsate with an otherworldly glow. Initial observations suggest that these patterns may serve a crucial yet cryptic purpose, perhaps linked to communication, camouflage, or even defense mechanisms.`,
        img: 'https://pixabay.com/get/g974700554fd575b0c2a1491948c42e9a568cc675089d8d996dfc2f5dd32fb6028e386616bae993231eb68d25ed984adf3f376808dcad0d101f0b87c2451b7d18_1280.jpg',
        date: '2024-05-24T13:22:55.711Z'
    },
    {
        id: '2',
        title: 'Kdwe ewf w f fwfwe',
        description: `Scientific research has uncovered a new mystery lurking in the depths of the ocean. As scientists delve deeper into the unexplored realms of the underwater world, they have stumbled upon a perplexing phenomenon that challenges our understanding of marine ecosystems. This latest discovery has ignited curiosity and raised questions about the intricate interplay between marine life and their environments.
        At the heart of this mystery lies an enigmatic species of bioluminescent jellyfish found thriving in the abyssal plains of the Pacific Ocean. Unlike their counterparts in shallower waters, these jellyfish exhibit unique luminescent patterns that seem to pulsate with an otherworldly glow. Initial observations suggest that these patterns may serve a crucial yet cryptic purpose, perhaps linked to communication, camouflage, or even defense mechanisms.
        At the heart of this mystery lies an enigmatic species of bioluminescent jellyfish found thriving in the abyssal plains of the Pacific Ocean. Unlike their counterparts in shallower waters, these jellyfish exhibit unique luminescent patterns that seem to pulsate with an otherworldly glow. Initial observations suggest that these patterns may serve a crucial yet cryptic purpose, perhaps linked to communication, camouflage, or even defense mechanisms.
        At the heart of this mystery lies an enigmatic species of bioluminescent jellyfish found thriving in the abyssal plains of the Pacific Ocean. Unlike their counterparts in shallower waters, these jellyfish exhibit unique luminescent patterns that seem to pulsate with an otherworldly glow. Initial observations suggest that these patterns may serve a crucial yet cryptic purpose, perhaps linked to communication, camouflage, or even defense mechanisms.`,
        img: 'https://pixabay.com/get/gf5620eed79009a0d2cba8bcb00d49af7bd542e1b5586ab1306ea5300c34792d6a5d88c4f1a258ed1ee9966b9139c2af905850f8c78630b296c548657047e1efe_1280.jpg',
        date: '2024-05-24T10:22:55.711Z'
    },
    {
        id: '3',
        title: 'Lfewm fwe feg e',
        description: `Scientific research has uncovered a new mystery lurking in the depths of the ocean. As scientists delve deeper into the unexplored realms of the underwater world, they have stumbled upon a perplexing phenomenon that challenges our understanding of marine ecosystems. This latest discovery has ignited curiosity and raised questions about the intricate interplay between marine life and their environments.
        At the heart of this mystery lies an enigmatic species of bioluminescent jellyfish found thriving in the abyssal plains of the Pacific Ocean. Unlike their counterparts in shallower waters, these jellyfish exhibit unique luminescent patterns that seem to pulsate with an otherworldly glow. Initial observations suggest that these patterns may serve a crucial yet cryptic purpose, perhaps linked to communication, camouflage, or even defense mechanisms.
        At the heart of this mystery lies an enigmatic species of bioluminescent jellyfish found thriving in the abyssal plains of the Pacific Ocean. Unlike their counterparts in shallower waters, these jellyfish exhibit unique luminescent patterns that seem to pulsate with an otherworldly glow. Initial observations suggest that these patterns may serve a crucial yet cryptic purpose, perhaps linked to communication, camouflage, or even defense mechanisms.`,
        img: 'https://pixabay.com/get/g6a89c0d9f9d1c81e31020e9cb14fa41690baa3a652dcf80dbf2c2e73fcb432fd1c57dcaaccf8c167c5ca5fc31418c8dd04d36134457018db1865718d627b7dd1_1280.png',
        date: '2024-05-24T09:22:55.711Z'
    },
    {
        id: '4',
        title: 'Lde wwfwe',
        description: `Scientific research has uncovered a new mystery lurking in the depths of the ocean. As scientists delve deeper into the unexplored realms of the underwater world, they have stumbled upon a perplexing phenomenon that challenges our understanding of marine ecosystems. This latest discovery has ignited curiosity and raised questions about the intricate interplay between marine life and their environments.
        At the heart of this mystery lies an enigmatic species of bioluminescent jellyfish found thriving in the abyssal plains of the Pacific Ocean. Unlike their counterparts in shallower waters, these jellyfish exhibit unique luminescent patterns that seem to pulsate with an otherworldly glow. Initial observations suggest that these patterns may serve a crucial yet cryptic purpose, perhaps linked to communication, camouflage, or even defense mechanisms.
        At the heart of this mystery lies an enigmatic species of bioluminescent jellyfish found thriving in the abyssal plains of the Pacific Ocean. Unlike their counterparts in shallower waters, these jellyfish exhibit unique luminescent patterns that seem to pulsate with an otherworldly glow. Initial observations suggest that these patterns may serve a crucial yet cryptic purpose, perhaps linked to communication, camouflage, or even defense mechanisms.`,
        img: 'https://pixabay.com/get/gb13abbf0b24a7aedaaa1a4b836abd48d68dbd9423cd518cd2bdd82633d01df645fa7cd53175a4d2f211035c965ad2cebdf27fbeb2d05afdd3da9fdbdc9d9b925_1280.jpg',
        date: '2024-05-24T18:11:28.168Z'
    },
    {
        id: '5',
        title: 'L dew w f fwfwe',
        description: `Scientific research has uncovered a new mystery lurking in the depths of the ocean. As scientists delve deeper into the unexplored realms of the underwater world, they have stumbled upon a perplexing phenomenon that challenges our understanding of marine ecosystems. This latest discovery has ignited curiosity and raised questions about the intricate interplay between marine life and their environments.
        At the heart of this mystery lies an enigmatic species of bioluminescent jellyfish found thriving in the abyssal plains of the Pacific Ocean. Unlike their counterparts in shallower waters, these jellyfish exhibit unique luminescent patterns that seem to pulsate with an otherworldly glow. Initial observations suggest that these patterns may serve a crucial yet cryptic purpose, perhaps linked to communication, camouflage, or even defense mechanisms.
        At the heart of this mystery lies an enigmatic species of bioluminescent jellyfish found thriving in the abyssal plains of the Pacific Ocean. Unlike their counterparts in shallower waters, these jellyfish exhibit unique luminescent patterns that seem to pulsate with an otherworldly glow. Initial observations suggest that these patterns may serve a crucial yet cryptic purpose, perhaps linked to communication, camouflage, or even defense mechanisms.`,
        img: 'https://pixabay.com/get/gecaeb85d096545332950c5f237a0bb37a5855c0d7b2a35a1521b7829b452697db4cba04126fb30a768fd79e6e33d399820f13be6fdd3e4dfb5b39da30d72bf45_1280.jpg',
        date: '2024-05-24T02:22:55.711Z'
    },
    {
        id: '6',
        title: 'Kd dw e r r3 r43r3r4 r3 f w f fwfwe',
        description: `Scientific research has uncovered a new mystery lurking in the depths of the ocean. As scientists delve deeper into the unexplored realms of the underwater world, they have stumbled upon a perplexing phenomenon that challenges our understanding of marine ecosystems. This latest discovery has ignited curiosity and raised questions about the intricate interplay between marine life and their environments.
        At the heart of this mystery lies an enigmatic species of bioluminescent jellyfish found thriving in the abyssal plains of the Pacific Ocean. Unlike their counterparts in shallower waters, these jellyfish exhibit unique luminescent patterns that seem to pulsate with an otherworldly glow. Initial observations suggest that these patterns may serve a crucial yet cryptic purpose, perhaps linked to communication, camouflage, or even defense mechanisms.
        At the heart of this mystery lies an enigmatic species of bioluminescent jellyfish found thriving in the abyssal plains of the Pacific Ocean. Unlike their counterparts in shallower waters, these jellyfish exhibit unique luminescent patterns that seem to pulsate with an otherworldly glow. Initial observations suggest that these patterns may serve a crucial yet cryptic purpose, perhaps linked to communication, camouflage, or even defense mechanisms.`,
        img: 'https://pixabay.com/get/ga4392ebaa6b55e410547f8bf95dac292a20fcae06a8f435e41b54e029472f5c88361fae8b42c0fda41ed955bb4d457c0b19d25bfbffdd7dba9559365925ae6fc_1280.jpg',
        date: '2020-05-23T18:22:55.711Z'
    },
    {
        id: '7',
        title: 'KLewmf few f fwfwe',
        description: `Scientific research has uncovered a new mystery lurking in the depths of the ocean. As scientists delve deeper into the unexplored realms of the underwater world, they have stumbled upon a perplexing phenomenon that challenges our understanding of marine ecosystems. This latest discovery has ignited curiosity and raised questions about the intricate interplay between marine life and their environments.
        At the heart of this mystery lies an enigmatic species of bioluminescent jellyfish found thriving in the abyssal plains of the Pacific Ocean. Unlike their counterparts in shallower waters, these jellyfish exhibit unique luminescent patterns that seem to pulsate with an otherworldly glow. Initial observations suggest that these patterns may serve a crucial yet cryptic purpose, perhaps linked to communication, camouflage, or even defense mechanisms.
        At the heart of this mystery lies an enigmatic species of bioluminescent jellyfish found thriving in the abyssal plains of the Pacific Ocean. Unlike their counterparts in shallower waters, these jellyfish exhibit unique luminescent patterns that seem to pulsate with an otherworldly glow. Initial observations suggest that these patterns may serve a crucial yet cryptic purpose, perhaps linked to communication, camouflage, or even defense mechanisms.`,
        img: 'https://pixabay.com/get/g160f84a95a7238bf6eba88140d5435083d92c7ca6aefa7e82ae0a62333dd330dcc088d7de20671e0b04ca9c8b322ae3f61a646a0ee87a62d0fe24dc7f1fa0bc1_1280.jpg',
        date: '2024-04-24T13:22:55.711Z'
    },
]

const useNewsStore = create<NewsStore>((set) => ({
    news: dataNews,
    newsPost: null,
    getPost: (id) => {
        const foundPost = dataNews.filter(news => news.id === id)[0]
        set({
            newsPost: foundPost
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
