import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { FC } from "react";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";

const EmailIcon: FC<SvgProps> = ({ size, ...props }) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14 0.5H1C0.723437 0.5 0.5 0.723437 0.5 1V11C0.5 11.2766 0.723437 11.5 1 11.5H14C14.2766 11.5 14.5 11.2766 14.5 11V1C14.5 0.723437 14.2766 0.5 14 0.5ZM13.375 2.23125V10.375H1.625V2.23125L1.19375 1.89531L1.80781 1.10625L2.47656 1.62656H12.525L13.1938 1.10625L13.8078 1.89531L13.375 2.23125ZM12.525 1.625L7.5 5.53125L2.475 1.625L1.80625 1.10469L1.19219 1.89375L1.62344 2.22969L6.96094 6.37969C7.11444 6.49894 7.30328 6.56367 7.49766 6.56367C7.69203 6.56367 7.88088 6.49894 8.03438 6.37969L13.375 2.23125L13.8062 1.89531L13.1922 1.10625L12.525 1.625Z"
                    fill="#050505"
                    fillOpacity="0.88"
                />
            </svg>
        </SvgContainer>
    );
};

export default EmailIcon;
