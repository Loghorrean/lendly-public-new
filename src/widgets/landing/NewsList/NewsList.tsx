import styles from "./NewsList.module.scss";
import NewsCard, {NewsArticle} from "@/src/widgets/landing/NewsCard/NewsCard";
import newsImage1 from "@/public/images/landing/news/news-image-1.png";
import newsImage2 from "@/public/images/landing/news/news-image-2.png";
import {BlockProps, cn} from "@/src/shared/utils";

const mockNews: Array<NewsArticle> = [
    {
        uuid: "38b322e9-a68d-4200-90ac-6209eb61c77f",
        photo: newsImage1,
        title: "Краудлендинг в тренде: инвестиционные перспективы шеринга на РБК",
        large: false,
    },
    {
        uuid: "895269ea-8c3a-445d-8a98-049dd2f887a8",
        photo: newsImage2,
        title: "Какие риски несет инвестор в краудлендинге?",
        large: false
    },
    {
        uuid: "a0e9baee-3da6-468e-980a-485a4e7f7574",
        photo: newsImage1,
        title: "Краудлендинг идет по России. Жители Казани, Орла, Новосибирска привлекают деньги " +
            "под залог недвижимости на инвестиционной платформе Lendly.ru",
        large: false
    },
    {
        uuid: "ddd3619d-b729-41c8-9f09-862ef6d284e1",
        photo: newsImage2,
        title: "Краудлендинг в тренде: инвестиционные перспективы шеринга на РБК",
        large: false
    }
];

const NewsList = ({ ...props }: BlockProps<HTMLUListElement>) => {
    const renderNews = () => {
        return mockNews.map(post => <NewsCard key={post.uuid} article={post} className={styles.news_list__card} />)
    }
    return (
        <ul {...props} className={cn(styles.news_list, props.className)}>
            {renderNews()}
        </ul>
    )
}

export default NewsList;
