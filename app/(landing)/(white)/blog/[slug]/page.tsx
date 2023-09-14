"use client";

import BlogPost from "../../../../../src/widgets/post/BlogPost";
import ReadMoreSection from "@/src/widgets/post/ReadMoreSection";

export default function DetailedPost({ params }: { params: { slug: string } }) {
    return (
        <>
            <BlogPost slug={params.slug} />
            <ReadMoreSection />
        </>
    );
}