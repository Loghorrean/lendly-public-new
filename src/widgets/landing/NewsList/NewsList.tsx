import styles from "./NewsList.module.scss";
import NewsCard from "@/src/widgets/landing/NewsCard/NewsCard";
import newsImage1 from "@/public/images/landing/news/news-image-1.png";
import newsImage2 from "@/public/images/landing/news/news-image-2.png";
import {BlockProps, cn, isValueEmpty} from "@/src/shared/utils";
import {useGetPostsList} from "@/src/entities/post/hooks";
import Loader from "@/src/shared/ui/loaders/Loader";

const NewsList = ({ ...props }: BlockProps<HTMLUListElement>) => {
    const getPostsList = useGetPostsList({ page: 1, perPage: 4 });
    if (getPostsList.isLoading) {
        return <Loader dark />;
    }
    if (isValueEmpty(getPostsList.data) || getPostsList.data.items.length === 0) {
        return <div className={styles.news_list__placeholder}>Новости не найдены</div>
    }
    return <ul {...props} className={cn(styles.news_list, props.className)}>
        { getPostsList.data.items.map(post => <NewsCard key={post.slug} post={post} className={styles.news_list__card} />) }
    </ul>;
}

export default NewsList;
