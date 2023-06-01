"use client";

import { Provider as JotaiProvider } from "jotai";
import { FC, PropsWithChildren } from "react";
const Providers: FC<PropsWithChildren> = ({ children }) => {
    return (
        <JotaiProvider>{children}</JotaiProvider>
    );
};

export default Providers;
