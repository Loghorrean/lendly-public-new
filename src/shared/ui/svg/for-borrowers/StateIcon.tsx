import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import SvgContainer, {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const StateIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_48, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="44" height="47" viewBox="0 0 44 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="21.9985" y="1.6001" width="13.5762" height="13.5762" transform="rotate(45 21.9985 1.6001)" stroke="#363637" strokeWidth="3"/>
                <rect x="31.5991" y="11.1997" width="13.5762" height="13.5762" transform="rotate(45 31.5991 11.1997)" stroke="#363637" strokeWidth="3"/>
                <rect x="12.3999" y="11.1997" width="13.5762" height="13.5762" transform="rotate(45 12.3999 11.1997)" stroke="#363637" strokeWidth="3"/>
                <rect x="21.9985" y="26.9536" width="13.5762" height="13.5762" transform="rotate(45 21.9985 26.9536)" fill="#05B768"/>
            </svg>
        </SvgContainer>
    );
}

export default StateIcon;
