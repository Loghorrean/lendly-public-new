import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const ArrowBottom = ({ size = SVG_CONTAINER_SIZE.SIZE_16, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.99989 10.8475L12.5729 6.27445L13.9871 7.68866L7.70709 13.9687H6.29288L0.0309653 7.70677L1.44518 6.29256L5.99989 10.8473L5.99989 -0.000114101L7.99989 -0.000114438L7.99989 10.8475Z" fill="#363637"/>
            </svg>
        </SvgContainer>
    );
}

export default ArrowBottom;
