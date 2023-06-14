import styles from "./BlogSearch.module.scss";
import CommonInput from "@/src/shared/ui/inputs/CommonInput";
import SearchSvg from "@/src/shared/ui/svg/SearchSvg";

const BlogSearch = () => {
    return (
        <div className={styles.blog_search_container}>
            <label htmlFor="search" className={styles.blog_search_text}>Что вас интересует</label>
            <CommonInput id="search">
                <CommonInput.Container>
                    <SearchSvg />
                    <CommonInput.Input placeholder="Поиск" className={styles.blog_search__input} />
                </CommonInput.Container>
            </CommonInput>
        </div>
    );
}

export default BlogSearch;
