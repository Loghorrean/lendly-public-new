import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import SvgContainer, {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const EncumbranceIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_48, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg width="45" height="42" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25.2001" cy="18.7999" r="9.6" fill="#05B768"/>
                <circle cx="25.1198" cy="18.8293" r="15.4074" stroke="#363637" strokeWidth="3"/>
                <path d="M43.3428 40.4H2.25635L43.3428 1.19995" stroke="#363637" strokeWidth="3" strokeLinejoin="round"/>
            </svg>
        </SvgContainer>
    );
}

export default EncumbranceIcon;
