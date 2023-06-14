import {ProjectLink} from "@/src/shared/ui/links";
import Link from "next/link";
import styles from "./AuthLink.module.scss";
import {cn} from "@/src/shared/utils";
import {ComponentProps} from "react";

type Props = ComponentProps<typeof Link>;

const AuthLink = ({ ...props }: Props) => {
    return (
        <ProjectLink {...props} className={cn(styles.auth_link, props.className)}>
            { props.children }
        </ProjectLink>
    );
}

export default AuthLink;
