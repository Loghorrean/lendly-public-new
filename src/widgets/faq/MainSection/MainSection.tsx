import styles from "./MainSection.module.scss";
import PrimaryHeading from "@/src/shared/ui/typography/Heading/decorators/PrimaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import {Container} from "@/src/shared/ui/layout";
import FaqSearch from "@/src/widgets/faq/FaqSearch";
import React, {ForwardedRef} from "react";
import {BlockProps} from "@/src/shared/utils";

type Props = BlockProps & {
    setSearch: (search: string) => void;
}

const MainSection = ({ setSearch, ...props }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <section {...props} className={styles.main_section} ref={ref}>
            <Container>
                <PrimaryHeading>
                    <Heading headingType={HEADING_TYPE.H1} className={styles.main_section__heading}>
                        FAQ
                    </Heading>
                </PrimaryHeading>
                <FaqSearch setSearch={setSearch} />
            </Container>
        </section>
    );
}

export default React.forwardRef(MainSection);
