"use client";

import MainSection from "@/src/widgets/faq/MainSection";
import QuestionsSection from "@/src/widgets/faq/QuestionsSection";
import {useState} from "react";
import {useDebounceFn, useEffectOnUpdate} from "@/src/shared/utils";

export default function Faq() {
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounceFn(setSearch);
    return (
        <>
            <MainSection setSearch={debouncedSearch} />
            <QuestionsSection search={search} />
        </>
    );
}