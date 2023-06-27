"use client";

import BlogPostComponent from "@/src/widgets/post/BlogPostComponent";
import ReadMoreSection from "@/src/widgets/post/ReadMoreSection";
import styles from "../styles.module.scss";

export default function BlogPost() {
    return (
        <>
            <BlogPostComponent />
            <ReadMoreSection />
        </>
    );
}