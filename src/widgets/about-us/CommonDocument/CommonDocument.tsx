import styles from "./CommonDocument.module.scss";
import {useState} from "react";
import ArrowRight from "@/src/shared/ui/svg/arrows/ArrowRight";
import ArrowTopRight from "@/src/shared/ui/svg/arrows/ArrowTopRight";
import PdfIcon from "@/src/shared/ui/svg/PdfIcon";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";
import {ProjectLink} from "@/src/shared/ui/links";
import {useTargetBlank} from "@/src/shared/utils/hooks/useTargetBlank";
import {LegalDocument} from "@/src/entities/legal-document/model";

type Props = {
    document: LegalDocument;
}

const CommonDocument = ({ document }: Props) => {
    const getLink = () => {
        const documentNameIndex = document.url.indexOf("/page");
        if (documentNameIndex === -1) {
            return document.url;
        }
        const origin = typeof window !== "undefined" ? window.location.origin : "";
        return `${origin}${document.url.slice(documentNameIndex)}`;
    }
    const [hovered, setHovered] = useState(false);
    return (
        <li
            className={styles.common_document}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <ProjectLink {...useTargetBlank()} href={getLink()} className={styles.common_document__content}>
                <div className={styles.common_document__title}>
                    {document.title}
                </div>
                <footer className={styles.common_document__footer}>
                    <div className={styles.common_document__file}>
                        <PdfIcon fill={hovered ? "#05B768" : "#212226"} />
                        <span className={styles.common_document__mimetype}>
                            {document.format}, {document.size}
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
