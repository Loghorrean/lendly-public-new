import React, { ReactNode } from "react";
import { isValueEmpty } from "@/src/shared/utils";

export const validateChildren = (children: ReactNode, componentName: string) => {
    React.Children.map(children, child => {
        if (isValueEmpty(child)) {
            throw new Error("Passed empty children to component");
        }
        if (
            !(typeof child === "object" && "type" in child && typeof child.type === "function" && "name" in child.type)
        ) {
            return false;
        }
        if (child.type.name !== componentName) {
            throw new Error(
                `Passed wrong type of children to component, expected ${componentName}, received ${child.type.name}`
            );
        }
    });
    return true;
};
