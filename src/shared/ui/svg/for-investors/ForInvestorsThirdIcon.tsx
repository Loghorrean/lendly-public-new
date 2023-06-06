import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const ForInvestorsThirdIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_48, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38 4H25.2V26.4L31.6 18.9333L38 26.4V4Z" fill="#05B768"/>
                <path d="M2 2.3999H13.6667L18.6667 8.40243L42 8.3135V37.5999H2V2.3999Z" stroke="#363637" strokeWidth="3"/>
                <path d="M26.8 29.6L31.6 24.8L36.4 29.6" stroke="#363637" strokeWidth="3"/>
            </svg>
        </SvgContainer>
    );
}

export default ForInvestorsThirdIcon;
