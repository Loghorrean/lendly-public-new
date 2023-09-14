import React, {createContext, Dispatch, PropsWithChildren, SetStateAction, useContext} from "react";
import { isValueEmpty } from "@/src/shared/utils";
import {PostFilter} from "@/src/entities/post/model";

export type PostFilterContextType = {
    filter: PostFilter;
    setFilter: Dispatch<SetStateAction<PostFilter>>;
};

const PostFilterContext = createContext<PostFilterContextType | null>(null);

export const usePostFilterContext = () => {
    const data = useContext(PostFilterContext);
    if (isValueEmpty(data)) {
        throw new Error("Cannot use component outside of 'Post Filter' context");
    }
    return data;
};

function PostFilterContextProvider(props: PropsWithChildren<PostFilterContextType>) {
    const { children, ...value } = props;
    return <PostFilterContext.Provider value={value}>{children}</PostFilterContext.Provider>;
}

export default PostFilterContextProvider;
