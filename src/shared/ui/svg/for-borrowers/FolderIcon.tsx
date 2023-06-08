import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const FolderIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_48, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="48" height="40" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="27" y="0.200012" width="17.8" height="27" transform="rotate(90 27 0.200012)" fill="#05B768"/>
                <rect x="46.2129" y="7.75006" width="30" height="42.2129" transform="rotate(90 46.2129 7.75006)" stroke="white" strokeWidth="3"/>
                <path d="M45.7769 16.75L4 16.75" stroke="white" strokeWidth="3"/>
                <path d="M29.5 31.9376H41.5" stroke="white" strokeWidth="3"/>
            </svg>
        </SvgContainer>
    );
}

export default FolderIcon;
