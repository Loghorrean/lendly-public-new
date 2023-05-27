import dayjs from "dayjs";

export const formatDateTime = (date: Date, format: string) => {
    return dayjs(date).format(format);
};
