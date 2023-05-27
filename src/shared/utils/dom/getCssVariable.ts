"use client";

import { ColorDictionary } from "@/src/shared/utils";

export const getCssVariable = (variable: ColorDictionary) => {
    return getComputedStyle(document.body).getPropertyValue(variable);
};
