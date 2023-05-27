import { formatDateTime } from "./formatDateTime";

export const formatTime = (date: Date, format = "hh.mm"): string => {
    return formatDateTime(date, format);
};
