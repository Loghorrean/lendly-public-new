import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";

const ForBorrowersFirstIcon = ({ size, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 20H0V0C11.0444 0.0222222 20 8.97778 20 20Z" fill="#05B768"/>
                <path d="M20 0V20H40C40 8.97778 31.0444 0 20 0Z" fill="#363637"/>
                <path d="M0 20V40H20C20 28.9778 11.0444 20 0 20Z" fill="#05B768"/>
                <path d="M20 20V40H40C40 28.9778 31.0444 20 20 20Z" fill="#05B768"/>
            </svg>
        </SvgContainer>
    );
}

export default ForBorrowersFirstIcon;
