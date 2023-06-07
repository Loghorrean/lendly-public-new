import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const ScreenIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_48, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="46" height="43" viewBox="0 0 46 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.19995" y="2.3999" width="41.6" height="32" stroke="#363637" strokeWidth="3"/>
                <path d="M12.5999 40.7998H33.3999" stroke="#363637" strokeWidth="3" strokeLinejoin="round"/>
                <path d="M7 7.19971H39V29.5997H7V7.19971Z" fill="#05B768"/>
            </svg>
        </SvgContainer>
    );
}

export default ScreenIcon;
