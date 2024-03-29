import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

type Props = SvgProps & {
    black?: boolean;
}

const ForInvestorsFirstIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_48, black, ...props }: Props) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="33.3997" cy="22.3067" r="11.7867" fill={black ? "#000" : "#05B768"} />
                <circle cx="22.3063" cy="18.84" r="16.64" stroke={black ? "#fff" : "#363637"} strokeWidth="3"/>
                <path d="M0.812988 43.8H45.1863" stroke={black ? "#fff" : "#363637"} strokeWidth="3" strokeLinejoin="round"/>
            </svg>
        </SvgContainer>
    );
}

export default ForInvestorsFirstIcon;
