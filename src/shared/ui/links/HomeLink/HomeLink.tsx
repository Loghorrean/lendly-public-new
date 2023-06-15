import {ProjectImage} from "@/src/shared/ui/images";
import headerLogo from "@/public/images/logo/logo-fixed.svg";
import {ProjectLink} from "@/src/shared/ui/links";
import styles from "./HomeLink.module.scss";
import {ProjectLinkProps} from "@/src/shared/ui/links/ProjectLink/ProjectLink";
import {cn} from "@/src/shared/utils";

type Props = Omit<ProjectLinkProps, "href">;

const HomeLink = ({ ...props }: Props) => {
    return (
        <ProjectLink {...props} aria-label="Main page" href="/" className={cn(styles.home_link, props.className)}>
            <ProjectImage src={headerLogo} alt="Header logo" className={styles.home_link__image} />
        </ProjectLink>
    );
}

export default HomeLink;
