import {PostSize} from "@/src/entities/post/model/PostSize";

export interface Post {
    readonly slug: string;
    readonly title: string;
    readonly shortDescription: string;
    readonly shortContent: string;
    readonly hiddenContent?: string;
    readonly author: string;
    readonly publishedAt?: string;
    readonly authorPosition?: string;
    readonly authorPhoto?: string;
    readonly cover?: string;
    readonly postSize: PostSize;
    readonly tags: Array<string>;
}
