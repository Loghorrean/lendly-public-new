import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import styles from "./NewsSection.module.scss";
import {Container} from "@/src/shared/ui/layout";
import BlogAside from "@/src/widgets/blog/BlogAside";
import BlogPosts from "@/src/widgets/blog/BlogPosts";

const NewsSection = () => {
    return (
        <CommonBlock as="section" className={styles.news_section}>
            <Container>
                <div className={styles.news_section__container}>
                    <BlogAside />
                    <BlogPosts />
                </div>
            </Container>
        </CommonBlock>
    );
}

export default NewsSection;
