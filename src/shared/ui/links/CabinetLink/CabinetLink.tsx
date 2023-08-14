import ExternalLink from "@/src/shared/ui/links/ExternalLink";
import {AnchorHTMLAttributes} from "react";
import {appConfig} from "@/src/shared/configs";

type Props = AnchorHTMLAttributes<HTMLAnchorElement>;

const CabinetLink = ({ href, children, ...props }: Props) => {
    const cabinetHref = `${appConfig.cabinetBaseUrl}${href}`;
    return (
        <ExternalLink {...props} href={cabinetHref}>
            { children }
        </ExternalLink>
    );
}

export default CabinetLink;
