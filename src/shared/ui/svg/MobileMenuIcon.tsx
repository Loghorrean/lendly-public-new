import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const MobileMenuIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_40, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M18.0826 0.141602L0.0617676 0.141624L0.0617711 1.94085L18.0826 1.94083L18.0826 0.141602ZM18.0841 6.06836L0.063233 6.06838L0.063236 7.86761L18.0841 7.86759L18.0841 6.06836Z" fill="#212226"/>
            </svg>
        </SvgContainer>
    );
}

export default MobileMenuIcon;
