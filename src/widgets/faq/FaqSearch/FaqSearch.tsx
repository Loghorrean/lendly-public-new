import styles from "./FaqSearch.module.scss";
import CommonInput from "@/src/shared/ui/inputs/CommonInput";
import SearchSvg from "@/src/shared/ui/svg/SearchSvg";

const FaqSearch = () => {
    return (
        <div className={styles.faq_search_container}>
            <label htmlFor="search" className={styles.faq_search_text}>Что вас интересует</label>
            <CommonInput id="search">
                <CommonInput.Container>
                    <SearchSvg />
                    <CommonInput.Input placeholder="Поиск" />
                </CommonInput.Container>
            </CommonInput>
        </div>
    );
}

export default FaqSearch;