import { metaConfig } from "@/src/shared/configs";

export const provideTitle = (title: string, needPostfix = true): string => {
    if (!needPostfix) {
        return title;
    }
    return `${title} | ${metaConfig.baseTitle}`;
};
