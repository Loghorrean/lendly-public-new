import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const PictureIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_48, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="47" height="38" viewBox="0 0 47 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="38.2004" cy="8.8" r="8.8" fill="#05B768"/>
                <rect x="2.2002" y="7.19995" width="38.4" height="28.8" stroke="#363637" strokeWidth="3" />
                <path d="M2.2002 26.3999L11.8002 15.2L21.4003 26.3999H40.6002" stroke="#363637" strokeWidth="3" />
            </svg>
        </SvgContainer>
    );
}

export default PictureIcon;
