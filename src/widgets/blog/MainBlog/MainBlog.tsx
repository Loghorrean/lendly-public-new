"use client";

import MainSection from "@/src/widgets/blog/MainSection";
import NewsSection from "@/src/widgets/blog/NewsSection";
import {PostFilter} from "@/src/entities/post/model";
import {usePaginationFilter} from "@/src/shared/utils";
import PostFilterContextProvider from "@/src/entities/post/context/BlogFilterContext";

const MainBlog = () => {
    const [filter, setFilter] = usePaginationFilter<PostFilter>({
        defaultState: { title: "", tags: [] }
    });
    return (
        <PostFilterContextProvider filter={filter} setFilter={setFilter}>
            <MainSection />
            <NewsSection />
        </PostFilterContextProvider>
    );
}

export default MainBlog;
