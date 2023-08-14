"use client";

import { Provider as JotaiProvider } from "jotai";
import {FC, PropsWithChildren, useState} from "react";
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";
const Providers: FC<PropsWithChildren> = ({ children }) => {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            <JotaiProvider>{children}</JotaiProvider>
        </QueryClientProvider>
    );
};

export default Providers;
