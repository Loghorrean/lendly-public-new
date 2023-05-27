import { useModalContext } from "@/src/shared/ui/layout/Modal/context/ModalContext";
import styles from "./ModalHeader.module.scss";
import { ReactNode } from "react";
import { Button } from "@/src/shared/ui/buttons";
import AsLink from "@/src/shared/ui/buttons/decorators/AsLink";
import CloseIcon from "@/src/shared/ui/svg/common/CloseIcon";

type Props = {
    heading: ReactNode;
};

const ModalHeader = ({ heading }: Props) => {
    const { onClose } = useModalContext();
    return (
        <header className={styles.modal_header}>
            <p className={styles.modal_header__heading}>{heading}</p>
            <AsLink>
                <Button onClick={onClose}>
                    <CloseIcon />
                </Button>
            </AsLink>
        </header>
    );
};

export default ModalHeader;
