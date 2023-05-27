import { FC } from "react";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const WalletIcon: FC<SvgProps> = ({ size = SVG_CONTAINER_SIZE.SIZE_16, ...props }) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.75 0.75H1.25C0.973437 0.75 0.75 0.973437 0.75 1.25V12.75C0.75 13.0266 0.973437 13.25 1.25 13.25H12.75C13.0266 13.25 13.25 13.0266 13.25 12.75V1.25C13.25 0.973437 13.0266 0.75 12.75 0.75ZM12.125 8H7.25V6H12.125V8ZM12.125 12.125H1.875V1.875H12.125V5H6.75C6.47344 5 6.25 5.22344 6.25 5.5V8.5C6.25 8.77656 6.47344 9 6.75 9H12.125V12.125ZM8.0625 7C8.0625 7.16576 8.12835 7.32473 8.24556 7.44194C8.36277 7.55915 8.52174 7.625 8.6875 7.625C8.85326 7.625 9.01223 7.55915 9.12944 7.44194C9.24665 7.32473 9.3125 7.16576 9.3125 7C9.3125 6.83424 9.24665 6.67527 9.12944 6.55806C9.01223 6.44085 8.85326 6.375 8.6875 6.375C8.52174 6.375 8.36277 6.44085 8.24556 6.55806C8.12835 6.67527 8.0625 6.83424 8.0625 7Z"
                    fill="#050505"
                    fillOpacity="0.88"
                />
            </svg>
        </SvgContainer>
    );
};

export default WalletIcon;
