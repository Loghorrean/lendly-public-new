export type Shift<T extends any[]> = ((...t: T) => any) extends (first: any, ...rest: infer Rest) => any ? Rest : never;

// use a distributed conditional type here
export type ShiftUnion<T> = T extends any[] ? Shift<T> : never;
