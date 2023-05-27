import { ObjectValues } from "@/src/shared/utils";

export const COLOR_DICTIONARY = {
    WHITE: "--white-color",
    BLACK: "--black-color",
    PRIMARY_PURPLE_COLOR: "--primary-purple-color",
    DARK_COLOR: "--dark-color",
    PRIMARY_DARK_COLOR: "--primary-dark-color",
    PRIMARY_DARK_COLOR_LIGHTER: "--primary-dark-color-lighter",
    PRIMARY_DARK_COLOR_LIGHTEST: "--primary-dark-color-lightest",
    COLOR_ERROR_BORDER: "--color-error-border",
    COLOR_ERROR_BACKGROUND: "--color-error-background",
    COLOR_ERROR_BASE: "--color-error-base",
    PRIMARY_GRAY_COLOR: "--primary-gray-color",
    PRIMARY_GRAY_COLOR_TEXT: "--primary-gray-color-text",
    PRIMARY_GRAY_BORDER_COLOR: "--primary-gray-border-color",
    PRIMARY_GRAY_BORDER_COLOR_LIGHTER: "--primary-gray-border-color-lighter",
};

export type ColorDictionary = ObjectValues<typeof COLOR_DICTIONARY>;
