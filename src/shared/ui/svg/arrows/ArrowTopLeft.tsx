import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const ArrowTopLeft = ({ size = SVG_CONTAINER_SIZE.SIZE_16, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.74348 2.45764L10.1849 2.45764V0.457642L1.3036 0.457642L0.303603 1.45764V10.3133H2.3036V3.84619L9.99985 11.5424L11.4141 10.1282L3.74348 2.45764Z" fill="white"/>
            </svg>
        </SvgContainer>
    );
}

export default ArrowTopLeft;
