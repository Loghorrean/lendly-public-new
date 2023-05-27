export type DeepRequired<T> = T extends object
    ? Required<{
          [K in keyof T]: NonNullable<DeepRequired<T[K]>>;
      }>
    : NonNullable<Required<T>>;
