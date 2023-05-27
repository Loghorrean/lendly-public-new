export type PartialObject<T> = { [key in keyof T]?: T[key] };
