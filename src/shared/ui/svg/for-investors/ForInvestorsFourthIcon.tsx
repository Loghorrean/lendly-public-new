import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const ForInvestorsFourthIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_48, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="48" height="39" viewBox="0 0 48 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="-0.334717" y="0.199829" width="24.0875" height="17.3965" fill="#05B768"/>
                <rect x="6.35693" y="7.55994" width="40.1458" height="29.4403" stroke="#363637" strokeWidth="3"/>
                <path d="M47.1716 26.2942H34.4587V18.265H47.1716" stroke="#363637" strokeWidth="3"/>
            </svg>
        </SvgContainer>
    );
}

export default ForInvestorsFourthIcon;
