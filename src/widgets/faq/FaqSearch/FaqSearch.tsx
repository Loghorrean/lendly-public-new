import styles from "./FaqSearch.module.scss";
import CommonInput from "@/src/shared/ui/inputs/CommonInput";
import SearchSvg from "@/src/shared/ui/svg/SearchSvg";
import {useRef} from "react";

type Props = {
    setSearch: (search: string) => void;
}

const FaqSearch = ({ setSearch }: Props) => {
    return (
        <div className={styles.faq_search_container}>
            <label htmlFor="search" className={styles.faq_search_text}>Что вас интересует</label>
            <CommonInput id="search" onChange={setSearch}>
                <CommonInput.Container>
                    <SearchSvg />
                    <CommonInput.Input placeholder="Поиск" />
                </CommonInput.Container>
            </CommonInput>
        </div>
    );
}

export default FaqSearch;
