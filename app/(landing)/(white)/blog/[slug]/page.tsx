"use client";

import ReadMoreSection from "@/src/widgets/post/ReadMoreSection";
import BlogPost from "@/src/widgets/post/BlogPost";

export default function DetailedPost({ params }: { params: { slug: string } }) {
    return (
        <>
            <BlogPost slug={params.slug} />
            <ReadMoreSection />
        </>
    );
}