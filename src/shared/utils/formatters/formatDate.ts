import { formatDateTime } from "./formatDateTime";

export const formatDate = (date: Date, format = "DD.MM.YYYY"): string => {
    return formatDateTime(date, format);
};
