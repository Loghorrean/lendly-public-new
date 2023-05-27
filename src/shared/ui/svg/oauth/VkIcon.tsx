import { FC } from "react";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import SvgContainer from "@/src/shared/ui/svg/SvgContainer";

const VkIcon: FC<SvgProps> = ({ size, ...props }) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.95919 8.66667C3.17593 8.66667 0.447663 5.41342 0.333984 0H2.72998C2.80868 3.97331 4.57504 5.65631 5.97416 6.00333V0H8.23032V3.42675C9.61196 3.27927 11.0634 1.71772 11.5531 0H13.8092C13.4332 2.11679 11.8592 3.67833 10.7399 4.32031C11.8592 4.84083 13.6519 6.20287 14.334 8.66667H11.8505C11.317 7.01835 9.98797 5.74307 8.23032 5.56956V8.66667H7.95919Z"
                    fill="#050505"
                    fillOpacity="0.88"
                />
            </svg>
        </SvgContainer>
    );
};

export default VkIcon;
