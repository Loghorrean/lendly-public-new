import styles from "./BlogSearch.module.scss";
import CommonInput from "@/src/shared/ui/inputs/CommonInput";
import SearchSvg from "@/src/shared/ui/svg/SearchSvg";
import {CommonInputProps} from "@/src/shared/ui/inputs/CommonInput/CommonInput";

const BlogSearch = ({ ...props }: Omit<CommonInputProps, "id">) => {
    return (
        <div className={styles.blog_search_container}>
            <CommonInput id="search" onChange={props.onChange}>
                <CommonInput.Container>
                    <SearchSvg />
                    <CommonInput.Input placeholder="Что вас интересует?" className={styles.blog_search__input} defaultValue={props.value} />
                </CommonInput.Container>
            </CommonInput>
        </div>
    );
}

export default BlogSearch;
