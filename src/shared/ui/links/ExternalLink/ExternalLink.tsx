import { AnchorHTMLAttributes, FC } from "react";
import styles from "./ExternalLink.module.scss";
import { useTargetBlank } from "@/src/shared/utils/hooks/useTargetBlank";
import { cn } from "@/src/shared/utils";

type Props = AnchorHTMLAttributes<HTMLAnchorElement>;

const ExternalLink: FC<Props> = ({ ...props }) => {
    return (
        <a {...props} {...useTargetBlank()} className={cn(styles.external_link, props.className)}>
            {props.children}
        </a>
    );
};

export default ExternalLink;
