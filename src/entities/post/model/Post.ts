export interface Post {
    readonly slug: string;
    readonly title: string;
    readonly shortContent: string;
    readonly hiddenContent?: string;
    readonly author: string;
    readonly publishedAt?: string;
}