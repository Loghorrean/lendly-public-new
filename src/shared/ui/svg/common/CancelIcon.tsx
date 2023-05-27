import { FC } from "react";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import SvgContainer from "@/src/shared/ui/svg/SvgContainer";

const CancelIcon: FC<SvgProps> = ({ size, ...props }) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9.875 6.5H4.125C4.05625 6.5 4 6.55625 4 6.625V7.375C4 7.44375 4.05625 7.5 4.125 7.5H9.875C9.94375 7.5 10 7.44375 10 7.375V6.625C10 6.55625 9.94375 6.5 9.875 6.5Z"
                    fill="#050505"
                    fillOpacity="0.88"
                />
                <path
                    d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM7 12.8125C3.79063 12.8125 1.1875 10.2094 1.1875 7C1.1875 3.79063 3.79063 1.1875 7 1.1875C10.2094 1.1875 12.8125 3.79063 12.8125 7C12.8125 10.2094 10.2094 12.8125 7 12.8125Z"
                    fill="#050505"
                    fillOpacity="0.88"
                />
            </svg>
        </SvgContainer>
    );
};

export default CancelIcon;
