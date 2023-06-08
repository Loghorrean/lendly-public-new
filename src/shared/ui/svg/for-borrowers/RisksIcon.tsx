import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const RisksIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_48, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="38" height="46" viewBox="0 0 38 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.3249 9.32962L24.0815 25.6526L14.8382 9.32962H33.3249Z" fill="#05B768"/>
                <path d="M10.4375 37.9751L15.9883 32.4243L21.6421 38.0821L16.0913 43.6329L10.4375 37.9751Z" stroke="#363637" strokeWidth="3"/>
                <path d="M28.5591 3.7312L15.7686 26.3182L2.97803 3.7312H28.5591Z" stroke="#363637" strokeWidth="3"/>
            </svg>
        </SvgContainer>
    );
}

export default RisksIcon;
