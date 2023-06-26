import styles from "./CommonDocument.module.scss";
import {useState} from "react";
import ArrowRight from "@/src/shared/ui/svg/arrows/ArrowRight";
import ArrowTopRight from "@/src/shared/ui/svg/arrows/ArrowTopRight";
import PdfIcon from "@/src/shared/ui/svg/PdfIcon";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";
import {ProjectLink} from "@/src/shared/ui/links";
import {useTargetBlank} from "@/src/shared/utils/hooks/useTargetBlank";

export type ProjectDocument = {
    title: string;
    slug: string;
    link: string;
    mimetype: string;
    size: string;
}

type Props = {
    document: ProjectDocument;
}

const CommonDocument = ({ document }: Props) => {
    const [hovered, setHovered] = useState(false);
    return (
        <li
            className={styles.common_document}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <ProjectLink {...useTargetBlank()} href={`/documents/${document.slug}`} className={styles.common_document__content}>
                <div className={styles.common_document__title}>
                    {document.title}
                </div>
                <footer className={styles.common_document__footer}>
                    <div className={styles.common_document__file}>
                        <PdfIcon fill={hovered ? "#05B768" : "#212226"} />
                        <span className={styles.common_document__mimetype}>
                            {document.mimetype}, {document.size}
                        </span>
                    </div>
                    <div className={styles.common_document__link}>
                        Открыть
                        { hovered ? <ArrowTopRight fill="#05B768" /> : <ArrowRight size={SVG_CONTAINER_SIZE.SIZE_12} fill="#212226" /> }
                    </div>
                </footer>
            </ProjectLink>
        </li>
    );
}

export default CommonDocument;
