import {BlockProps} from "@/src/shared/utils";
import React, {ForwardedRef} from "react";
import styles from "./MainSection.module.scss";
import {Container} from "@/src/shared/ui/layout";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import PrimaryHeading from "@/src/shared/ui/typography/Heading/decorators/PrimaryHeading";
import BlogSearch from "@/src/widgets/blog/BlogSearch";

const MainSection = ({ ...props }: BlockProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <section {...props} className={styles.main_section} ref={ref}>
            <Container>
                <PrimaryHeading>
                    <Heading headingType={HEADING_TYPE.H1} className={styles.main_section__heading}>
                        Блог Lendly
                    </Heading>
                </PrimaryHeading>
                <BlogSearch />
            </Container>
        </section>
    );
}

export default React.forwardRef(MainSection);
