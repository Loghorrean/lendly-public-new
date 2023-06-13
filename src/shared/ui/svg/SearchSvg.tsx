import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const SearchSvg = ({ size = SVG_CONTAINER_SIZE.SIZE_16, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.6633 5.48918C10.6633 7.4162 9.10118 8.97836 7.17415 8.97836C6.21098 8.97836 5.34217 8.59074 4.70871 7.95819C4.07405 7.32443 3.68497 6.45414 3.68497 5.48918C3.68497 3.56216 5.24713 2 7.17415 2C9.10118 2 10.6633 3.56216 10.6633 5.48918ZM12.6633 5.48918C12.6633 8.52077 10.2057 10.9784 7.17415 10.9784C6.04374 10.9784 4.99313 10.6367 4.11998 10.0509L1.48455 12.7047L0.0654297 11.2955L2.6886 8.65397C2.05641 7.75958 1.68497 6.66776 1.68497 5.48918C1.68497 2.45759 4.14256 0 7.17415 0C10.2057 0 12.6633 2.45759 12.6633 5.48918Z" fill="#828282"/>
            </svg>
        </SvgContainer>
    );
}

export default SearchSvg;
