"use client";

import styles from "./ActualDocuments.module.scss";
import CommonDocument from "@/src/widgets/about-us/CommonDocument/CommonDocument";
import {useWindowSize} from "@/src/shared/utils";
import {useMemo} from "react";
import {useGetLegalDocumentsList} from "@/src/entities/legal-document/hooks";
import {LegalDocumentType} from "@/src/entities/legal-document/model";
import Loader from "@/src/shared/ui/loaders/Loader";

type Props = {
    type: LegalDocumentType;
}

const ActualDocuments = ({ type }: Props) => {
    const getDocuments = useGetLegalDocumentsList({ type });
    const [width] = useWindowSize();
    const renderDocuments = useMemo(() => {
        if (getDocuments.isLoading) {
            return <Loader dark />
        }
        if (width < 768) {
            return <div className={styles.actual_documents__columns}>
                <ul className={styles.actual_documents__column}>
                    { getDocuments.data?.items.slice(0, 6).map(document => <CommonDocument document={document} key={document.title} />) }
                </ul>
                <ul className={styles.actual_documents__column}>
                    { getDocuments.data?.items.slice(6).map(document => <CommonDocument document={document} key={document.title} />) }
                </ul>
            </div>
        }
        return <ul className={styles.actual_documents}>
            { getDocuments.data?.items.map(document => <CommonDocument document={document} key={document.title} />) }
        </ul>
    }, [width, getDocuments.data, getDocuments.isLoading]);
    return (
        <>
            {renderDocuments}
        </>
    );
}

export default ActualDocuments;
