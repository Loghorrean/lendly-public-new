import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const MagnifierIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_48, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22.7999" cy="23.2001" r="9.6" fill="#05B768"/>
                <circle cx="26.8" cy="19.1999" r="16.8" stroke="#363637" strokeWidth="3"/>
                <path d="M11.6 35.1997L1.22656 45.5999" stroke="#363637" strokeWidth="3"/>
            </svg>
        </SvgContainer>
    );
}

export default MagnifierIcon;
