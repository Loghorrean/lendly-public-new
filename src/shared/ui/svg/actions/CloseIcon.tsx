import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const CloseIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_16, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.707 12.8353L3.2512 3.37949" stroke="#363637" strokeWidth="2" />
                <path d="M3.25391 12.8352L12.7097 3.37939" stroke="#363637" strokeWidth="2" />
            </svg>
        </SvgContainer>
    );
};

export default CloseIcon;
