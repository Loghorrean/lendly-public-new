import { FC } from "react";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import SvgContainer from "@/src/shared/ui/svg/SvgContainer";

const YandexIcon: FC<SvgProps> = ({ size, ...props }) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9.50065 12H7.22127V1.62435H6.20585C4.34458 1.62435 3.36963 2.48086 3.36963 3.75942C3.36963 5.20999 4.04208 5.88207 5.43321 6.73858L6.57965 7.44968L3.28485 11.9982H0.833984L3.7993 7.93734C2.0941 6.81661 1.13456 5.72248 1.13456 3.87646C1.13456 1.56938 2.88215 0 6.19044 0H9.48524V11.9965H9.50065V12Z"
                    fill="#050505"
                    fillOpacity="0.88"
                />
            </svg>
        </SvgContainer>
    );
};

export default YandexIcon;
