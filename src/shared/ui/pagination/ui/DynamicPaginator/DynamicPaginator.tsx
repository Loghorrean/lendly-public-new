import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loader from "@/src/shared/ui/loaders/Loader";

//TODO: RESOLVE SUSPENSE FALLBACK (NOW SHOWN)
const Paginator = dynamic(() => import("../Paginator"), {
    ssr: false,
});

const DynamicPaginator = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Paginator />
        </Suspense>
    );
};

export default DynamicPaginator;
