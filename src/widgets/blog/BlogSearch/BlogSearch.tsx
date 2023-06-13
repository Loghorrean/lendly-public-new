import styles from "./BlogSearch.module.scss";
import CommonInput from "@/src/shared/ui/inputs/CommonInput";
import SearchSvg from "@/src/shared/ui/svg/SearchSvg";

const BlogSearch = () => {
    return (
        <div className={styles.blog_search_container}>
            <label htmlFor="search" className={styles.blog_search}>Что вас интересует</label>
            <CommonInput id="search">
                <CommonInput.Container>
                    <SearchSvg />
                    <CommonInput.Input placeholder="Поиск" />
                </CommonInput.Container>
            </CommonInput>
        </div>
    );
}

export default BlogSearch;
