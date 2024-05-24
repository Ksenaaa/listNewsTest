import { months } from "utils/constants/months";
import { weekdays } from "utils/constants/weekdays";

export const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    const dayOfWeek = weekdays[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
}
