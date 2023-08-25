"use client";

import styles from "./DynamicPageSection.module.css";
import PrimaryHeading from "@/src/shared/ui/typography/Heading/decorators/PrimaryHeading";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import SecondaryHeading from "@/src/shared/ui/typography/Heading/decorators/SecondaryHeading";
import {useGetStaticPage} from "@/src/entities/static-page/hooks";
import Loader from "@/src/shared/ui/loaders/Loader";
import {isValueEmpty} from "@/src/shared/utils";
import {Container} from "@/src/shared/ui/layout";

type Props = {
    param: string;
}

const DynamicPageSection = ({ param }: Props) => {
    const { isLoading, data } = useGetStaticPage({ slug: param });
    const renderPage = () => {
        if (isLoading) {
            return <Loader dark />
        }
        if (isValueEmpty(data) || (data as unknown) === "" || data.content === "") {
            return <PrimaryHeading>
                <Heading headingType={HEADING_TYPE.H1}>
                    Страница не найдена
                </Heading>
            </PrimaryHeading>;
        }
        return <div dangerouslySetInnerHTML={{ __html: data.content }}></div>    }
    return (
        <section className={styles.dynamic_page_section}>
            <Container>
                { renderPage() }
            </Container>
        </section>
    );
}

export default DynamicPageSection;
