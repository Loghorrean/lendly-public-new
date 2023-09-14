"use client";

import styles from "./BlogPost.module.scss";
import ArrowLeft from "@/src/shared/ui/svg/arrows/ArrowLeft";
import {Container} from "@/src/shared/ui/layout";
import {Heading} from "@/src/shared/ui/typography";
import {HEADING_TYPE} from "@/src/shared/ui/typography/Heading/Heading";
import {ProjectImage} from "@/src/shared/ui/images";
import {ProjectLink} from "@/src/shared/ui/links";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import {PRIMARY_BUTTON_COLOR} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import {
    PRIMARY_BUTTON_ARROW_COLOR
} from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";
import {useGetPostBySlug} from "@/src/entities/post/hooks";
import Loader from "@/src/shared/ui/loaders/Loader";
import {formatDate, isNotEmpty, isValueEmpty} from "@/src/shared/utils";

type Props = {
    slug: string;
}

const BlogPost = ({ slug }: Props) => {
    const { isLoading, data } = useGetPostBySlug(slug);
    if (isLoading) {
        return <Loader />
    }
    if (isValueEmpty(data)) {
        return <div>
            Пост не найден.
        </div>
    }
    return (
        <Container>
            <div className={styles.blog_post}>
                <ProjectLink href="/blog" className={styles.blog_post__back}>
                    <ArrowLeft />
                </ProjectLink>
                <div className={styles.blog_post__inner}>
                    <header className={styles.blog_post__header}>
                        <div className={styles.blog_post__date}>
                            { isNotEmpty(data.publishedAt) && formatDate(new Date(data.publishedAt)) }
                        </div>
                        <ul className={styles.blog_post__tags}>
                            { data.tags.map(tag => {
                                return <li key={tag} className={styles.blog_post__tag}>
                                    { tag }
                                </li>
                            }) }
                        </ul>
                    </header>
                    <Heading headingType={HEADING_TYPE.H1} className={styles.blog_post__title}>
                        { data.title }
                    </Heading>
                    <div className={styles.blog_post__author}>
                        { isNotEmpty(data.authorPhoto) && <ProjectImage src={data.authorPhoto} width={64} height={64} alt="Post author" /> }
                        <div className={styles.blog_post__author_name}>
                            <span>{data.author}</span>
                            { isNotEmpty(data.authorPosition) && <span className={styles.blog_post__author_title}>{ data.authorPosition }</span> }
                        </div>
                    </div>
                    <div className={styles.blog_post__content}>
                        <header>
                            { isNotEmpty(data.cover) && <ProjectImage fill src={data.cover} alt="Post picture 1" /> }
                        </header>
                        <section dangerouslySetInnerHTML={{ __html: data.content }}></section>
                    </div>
                    <div className={styles.blog_post__conclusion}>
                        <Heading headingType={HEADING_TYPE.H3} className={styles.blog_post__conclusion_heading}>
                            Начните инвестировать в малый и средний бизнес
                        </Heading>
                        <p className={styles.blog_post__conclusion_text}>
                            Увеличивайте свой капитал, инвестируя в бизнес, который прошел тщательный отбор: автоматический
                            и ручной скоринг Лендли. Выбирайте подходящую стратегию и получайте до 25,7% годовых.
                        </p>
                        <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE} arrow>
                            <ProjectLink href="/auth/register-lender" className={styles.blog_post__conclusion_link}>
                                Стать инвестором <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.BLACK} />
                            </ProjectLink>
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default BlogPost;
