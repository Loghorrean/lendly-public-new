import {ProjectImage} from "@/src/shared/ui/images";
import headerLogo from "@/public/images/logo/header-logo.png";
import {ProjectLink} from "@/src/shared/ui/links";
import styles from "./HomeLink.module.scss";
import {ProjectLinkProps} from "@/src/shared/ui/links/ProjectLink/ProjectLink";
import {cn} from "@/src/shared/utils";

type Props = Omit<ProjectLinkProps, "href">;

const HomeLink = ({ ...props }: Props) => {
    return (
        <ProjectLink {...props} href="/" className={cn(styles.home_link, props.className)}>
            <ProjectImage src={headerLogo} alt="Header logo" />
        </ProjectLink>
    );
}

export default HomeLink;
