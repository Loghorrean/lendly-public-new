import { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType, PropsWithChildren } from "react";

export type PolymorphicBlockProps<T extends ElementType> = {
    as?: T;
} & ComponentPropsWithoutRef<T> &
    PropsWithChildren;

export type PolymorphicBlockPropsWithRef<T extends ElementType> = {
    as?: T;
} & ComponentPropsWithRef<T> &
    PropsWithChildren;
