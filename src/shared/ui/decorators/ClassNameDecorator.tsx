import { FC } from "react";
import { ClassNameDecoratorProps } from "@/src/shared/utils/types";

export type ClassNameDecorator<T> = FC<T & ClassNameDecoratorProps>;
