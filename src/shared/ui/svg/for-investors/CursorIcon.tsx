import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const CursorIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_48, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.31738 9.80444L31.1318 21.0101L17.2535 24.637L13.523 38.6189L2.31738 9.80444Z" fill="#05B768"/>
                <path d="M10.0832 9.35866L42.3247 21.897L26.7958 25.9553L22.6216 41.6001L10.0832 9.35866Z" stroke="#363637" strokeWidth="3"/>
                <path d="M32.8755 31.2876L47.0598 27.5268" stroke="#363637" strokeWidth="3"/>
            </svg>
        </SvgContainer>
    );
}

export default CursorIcon;
