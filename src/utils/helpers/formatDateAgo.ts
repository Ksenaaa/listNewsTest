export const formatDateAgo = (dateString: string) => {
    const newsDate: Date = new Date(dateString);
    const currentDate: Date = new Date();

    const differenceInSeconds = Math.floor((currentDate.getTime() - newsDate.getTime()) / 1000);
    const differenceInMinutes = Math.floor(differenceInSeconds / 60);
    const differenceInHours = Math.floor(differenceInMinutes / 60);
    const differenceInDays = Math.floor(differenceInHours / 24);
    const differenceInMonths = Math.floor(differenceInDays / 30);
    const differenceInYears = Math.floor(differenceInMonths / 12);

    if (differenceInMinutes < 60) {
        return `${differenceInMinutes} min ago`;
    } else if (differenceInHours < 24) {
        return `${differenceInHours} hr ago`;
    } else if (differenceInDays < 30) {
        return `${differenceInDays} day ago`;
    } else if (differenceInMonths < 12) {
        return `${differenceInMonths} mo ago`;
    } else {
        return `${differenceInYears} yr ago`;
    }
}
