import styles from "./BlogPosts.module.scss";
import NewsCard from "@/src/widgets/landing/NewsCard";
import {useMemo} from "react";
import {usePagination} from "@/src/shared/ui/pagination/utils/usePagination";
import {useGetPostsList} from "@/src/entities/post/hooks";
import Pagination from "@/src/shared/ui/pagination/ui/Pagination";
import PaginationContent from "@/src/shared/ui/pagination/ui/PaginationContent";
import DynamicPaginator from "@/src/shared/ui/pagination/ui/DynamicPaginator";
import {isNotEmpty} from "@/src/shared/utils";

const BlogPosts = () => {
    const { page, perPage } = usePagination();
    const getPostsList = useGetPostsList({ page, perPage });
    const renderArticles = useMemo(() => {
        if (isNotEmpty(getPostsList.data)) {
            return getPostsList.data.items.map(item => <NewsCard post={item} key={item.slug} />);
        }
    }, [getPostsList.data]);
    return (
        <div className={styles.blog_posts}>
            <Pagination loading={getPostsList.isLoading} totalCount={getPostsList.data?.totalCount ?? 0} >
                <PaginationContent>
                    <ul className={styles.blog_posts__list}>
                        { renderArticles }
                    </ul>
                </PaginationContent>
                <DynamicPaginator />
            </Pagination>
        </div>
    );
}

export default BlogPosts;
