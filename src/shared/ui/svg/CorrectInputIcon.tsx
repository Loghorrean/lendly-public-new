import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";

const CorrectInputIcon = ({ size, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" rx="10" fill="#E0E0E0"/>
                <path d="M14.1309 7.52148L9.23522 12.4785L5.86914 9.34367" stroke="#404043" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="round"/>
            </svg>
        </SvgContainer>
    );
}

export default CorrectInputIcon;
