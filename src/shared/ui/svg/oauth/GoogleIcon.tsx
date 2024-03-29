import { FC } from "react";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import SvgContainer from "@/src/shared/ui/svg/SvgContainer";

const GoogleIcon: FC<SvgProps> = ({ size, ...props }) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.2664 4.9125H6.62109V7.23281H9.84609C9.70703 7.98281 9.28516 8.61719 8.64922 9.04219C8.11172 9.40156 7.42578 9.61406 6.61953 9.61406C5.05859 9.61406 3.73828 8.55937 3.26641 7.14219C3.14766 6.78281 3.07891 6.39844 3.07891 6.00313C3.07891 5.60781 3.14766 5.22344 3.26641 4.86406C3.73984 3.44844 5.06016 2.39375 6.62109 2.39375C7.50078 2.39375 8.28984 2.69688 8.91172 3.29063L10.6305 1.57031C9.59141 0.601562 8.23672 0.0078125 6.62109 0.0078125C4.27891 0.0078125 2.25234 1.35156 1.26641 3.31094C0.860156 4.12031 0.628906 5.03594 0.628906 6.00469C0.628906 6.97344 0.860156 7.8875 1.26641 8.69687C2.25234 10.6562 4.27891 12 6.62109 12C8.23984 12 9.59609 11.4625 10.5867 10.5469C11.7195 9.50313 12.3742 7.96563 12.3742 6.13906C12.3742 5.71406 12.3367 5.30625 12.2664 4.9125Z"
                    fill="#050505"
                    fillOpacity="0.88"
                />
            </svg>
        </SvgContainer>
    );
};

export default GoogleIcon;
