import {ObjectValues} from "@/src/shared/utils";

export const PROJECT_TYPE = {
    LOAN: "LOAN",
    PROJECT: "PROJECT"
} as const;

export type ProjectType = ObjectValues<typeof PROJECT_TYPE>;

const projectTypeTranslations = {
    [PROJECT_TYPE.PROJECT]: "Проект",
    [PROJECT_TYPE.LOAN]: "Займ"
} satisfies Record<ProjectType, string>;

export const translateProjectType = (type: ProjectType) => {
    return projectTypeTranslations[type];
}
