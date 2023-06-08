import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const HouseIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_48, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="48" height="41" viewBox="0 0 48 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.40217 0.800049H40.5983L48.4362 14.7637H-0.436523L7.40217 0.800049Z" fill="#05B768"/>
                <rect x="8.29053" y="9.52734" width="31.4182" height="29.6727" stroke="#363637" strokeWidth="3"/>
                <rect x="17.0181" y="23.491" width="13.9636" height="15.7091" stroke="#363637" strokeWidth="3"/>
            </svg>
        </SvgContainer>
    );
}

export default HouseIcon;
