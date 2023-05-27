import { FC } from "react";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import SvgContainer from "@/src/shared/ui/svg/SvgContainer";

const ErrorMessageIcon: FC<SvgProps> = ({ size, ...props }) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM9.58438 9.65938L8.55313 9.65469L7 7.80313L5.44844 9.65312L4.41563 9.65781C4.34688 9.65781 4.29063 9.60312 4.29063 9.53281C4.29063 9.50312 4.30156 9.475 4.32031 9.45156L6.35313 7.02969L4.32031 4.60938C4.30143 4.58647 4.29096 4.5578 4.29063 4.52812C4.29063 4.45937 4.34688 4.40312 4.41563 4.40312L5.44844 4.40781L7 6.25938L8.55156 4.40938L9.58281 4.40469C9.65156 4.40469 9.70781 4.45937 9.70781 4.52969C9.70781 4.55937 9.69688 4.5875 9.67813 4.61094L7.64844 7.03125L9.67969 9.45312C9.69844 9.47656 9.70938 9.50469 9.70938 9.53438C9.70938 9.60313 9.65313 9.65938 9.58438 9.65938Z"
                    fill="#FF4D4F"
                />
            </svg>
        </SvgContainer>
    );
};

export default ErrorMessageIcon;
