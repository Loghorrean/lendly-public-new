import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { FC } from "react";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";

const PhoneIcon: FC<SvgProps> = ({ size, ...props }) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.7047 2.72969L11.0406 1.06719C10.8375 0.864063 10.5656 0.75 10.2781 0.75C9.99062 0.75 9.71875 0.8625 9.51562 1.06719L7.72344 2.85625C7.52031 3.05937 7.40625 3.33281 7.40625 3.62031C7.40625 3.90937 7.51875 4.17969 7.72344 4.38437L9.12344 5.78594C8.80451 6.52904 8.34626 7.20421 7.77344 7.775C7.2 8.35156 6.52969 8.80625 5.78594 9.12812L4.38594 7.72656C4.18281 7.52344 3.91094 7.40937 3.62344 7.40937C3.48163 7.40885 3.34114 7.43663 3.21021 7.4911C3.07928 7.54557 2.96054 7.62562 2.86094 7.72656L1.06719 9.51562C0.864063 9.71875 0.75 9.99219 0.75 10.2797C0.75 10.5687 0.8625 10.8391 1.06719 11.0437L2.72969 12.7062C3.07656 13.0531 3.55469 13.2516 4.04531 13.2516C4.14687 13.2516 4.24531 13.2437 4.34531 13.2266C6.41406 12.8859 8.46719 11.7844 10.125 10.1281C11.7812 8.46875 12.8813 6.41562 13.225 4.34531C13.3234 3.75781 13.1266 3.15312 12.7047 2.72969ZM12.1172 4.15937C11.8125 6.00156 10.8219 7.83906 9.32969 9.33125C7.8375 10.8234 6.00156 11.8141 4.15938 12.1187C3.92813 12.1578 3.69062 12.0797 3.52187 11.9125L1.88906 10.2797L3.62031 8.54687L5.49219 10.4219L5.50625 10.4359L5.84375 10.3109C6.86707 9.9347 7.79635 9.34044 8.56717 8.56934C9.338 7.79825 9.93193 6.86877 10.3078 5.84531L10.4328 5.50781L8.54531 3.62187L10.2766 1.88906L11.9094 3.52187C12.0781 3.69062 12.1562 3.92812 12.1172 4.15937Z"
                    fill="#050505"
                    fillOpacity="0.88"
                />
            </svg>
        </SvgContainer>
    );
};

export default PhoneIcon;
