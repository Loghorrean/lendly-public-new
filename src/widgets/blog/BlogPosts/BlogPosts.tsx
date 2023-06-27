import styles from "./BlogPosts.module.scss";
import NewsCard from "@/src/widgets/landing/NewsCard";
import {NewsArticle} from "@/src/widgets/landing/NewsCard/NewsCard";
import blogImage1 from "@/public/images/blog/blog-image-1.png";
import blogImage2 from "@/public/images/blog/blog-image-2.png";
import BlogPaginator from "@/src/widgets/blog/BlogPaginator";
import {useState} from "react";

const mockArticles: Array<NewsArticle> = [
    {
        title: "Какие риски несет инвестор в краудлендинге?",
        description: "О подводных камнях таких инвестиций редакции РБК Инвестиции рассказал Александр Волгин, CEO и сооснователь Lendly.ru",
        large: false,
        uuid: "bcac4a7a-6f84-42fc-b29c-6c969fc740b2"
    },
    {
        title: "Какие риски несет инвестор в краудлендинге?",
        description: "О подводных камнях таких инвестиций редакции РБК Инвестиции рассказал Александр Волгин, CEO и сооснователь Lendly.ru",
        large: false,
        uuid: "af355cc0-5af2-4c88-9275-eeb10b5590f9"
    },
    {
        title: "Какие риски несет инвестор в краудлендинге?",
        description: "О подводных камнях таких инвестиций редакции РБК Инвестиции рассказал Александр Волгин, CEO и сооснователь Lendly.ru",
        large: true,
        uuid: "95659870-5fe6-4e86-8fb1-1a87f6bd395a"
    },
    {
        title: "Какие риски несет инвестор в краудлендинге?",
        large: false,
        photo: blogImage1,
        uuid: "bc09af44-f980-4cf6-8cea-ea88002f1877"
    },
    {
        title: "Какие риски несет инвестор в краудлендинге?",
        large: false,
        photo: blogImage2,
        uuid: "cb7beaea-3801-485e-8089-7668c90c4654"
    },
    {
        title: "Какие риски несет инвестор в краудлендинге?",
        large: true,
        photo: "/images/blog/blog-image-3.png",
        description: "Some description",
        uuid: "cb7beaea-3801-485e-8089-7668c90c4634"
    }
];

const articlesPerPage = 5;

const BlogPosts = () => {
    const [activePage, setActivePage] = useState(1);
    const renderArticles = () => {
        return mockArticles.map(article => <NewsCard article={article} key={article.uuid} />)
    }
    return (
        <div className={styles.blog_posts}>
            <ul className={styles.blog_posts__list}>
                { renderArticles() }
            </ul>
            <BlogPaginator activePage={activePage} onClick={setActivePage} />
        </div>
    );
}

export default BlogPosts;
