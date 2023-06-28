import styles from "./BlogSearch.module.scss";
import CommonInput from "@/src/shared/ui/inputs/CommonInput";
import SearchSvg from "@/src/shared/ui/svg/SearchSvg";

const BlogSearch = () => {
    return (
        <div className={styles.blog_search_container}>
            <CommonInput id="search">
                <CommonInput.Container>
                    <SearchSvg />
                    <CommonInput.Input placeholder="Что вас интересует?" className={styles.blog_search__input} />
                </CommonInput.Container>
            </CommonInput>
        </div>
    );
}

export default BlogSearch;
