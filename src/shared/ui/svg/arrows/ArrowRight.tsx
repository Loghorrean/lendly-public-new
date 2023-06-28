import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";

const ArrowRight = ({ size, color, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.1238 6.33325L6.55991 1.76932L7.97412 0.355104L14.2542 6.63513V8.04935L7.99224 14.3113L6.57802 12.897L11.1418 8.33325L0.642457 8.33325L0.642457 6.33325L11.1238 6.33325Z" />
            </svg>
        </SvgContainer>
    );
}

export default ArrowRight;
