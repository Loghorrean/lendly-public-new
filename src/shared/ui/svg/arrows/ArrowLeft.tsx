import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const ArrowLeft = ({ size = SVG_CONTAINER_SIZE.SIZE_16, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.13977 5.99097L7.69453 1.4362L6.28032 0.021986L0.000293107 6.30201L0.000293107 7.71623L6.26221 13.9781L7.67642 12.5639L3.10346 7.99097L13.9875 7.99097L13.9875 5.99097L3.13977 5.99097Z" fill="#363637"/>
            </svg>
        </SvgContainer>
    );
}

export default ArrowLeft;
