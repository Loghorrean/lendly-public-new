import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const ArrowTopRight = ({ size = SVG_CONTAINER_SIZE.SIZE_12, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#05B768" fillRule="evenodd" clipRule="evenodd" d="M5.8147 2.34326H0.983211L0.983211 0.843262L7.64419 0.843262L8.39419 1.59326V8.23502H6.89419V3.3851L1.12243 9.15686L0.0617676 8.0962L5.8147 2.34326Z" />
            </svg>
        </SvgContainer>
    )
}

export default ArrowTopRight;
