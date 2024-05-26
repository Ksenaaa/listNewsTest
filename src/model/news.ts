export interface News {
    id: string,
    title: string,
    description: string,
    img: string,
    link: string,
    date: string,
}

export interface NewsCard {
    id: string,
    title: string,
    description: string,
    img: string,
    link: string,
    date: string
}

export interface NewPostForCreate {
    title: string;
    description: string;
    img: string;
    link: string;
}
