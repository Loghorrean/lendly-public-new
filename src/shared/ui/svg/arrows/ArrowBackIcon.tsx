import { FC } from "react";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const ArrowBackIcon: FC<SvgProps> = ({ size = SVG_CONTAINER_SIZE.SIZE_20, ...props }) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.0318 6.25781H3.60403L10.4439 0.320312C10.5532 0.224609 10.4868 0.046875 10.3423 0.046875H8.61379C8.53762 0.046875 8.46536 0.0742186 8.40872 0.123047L1.02786 6.52734C0.960258 6.58594 0.906043 6.65838 0.868886 6.73976C0.83173 6.82115 0.8125 6.90956 0.8125 6.99902C0.8125 7.08849 0.83173 7.1769 0.868886 7.25828C0.906043 7.33966 0.960258 7.41211 1.02786 7.4707L8.45168 13.9141C8.48098 13.9395 8.51614 13.9531 8.55325 13.9531H10.3404C10.4849 13.9531 10.5513 13.7734 10.4419 13.6797L3.60403 7.74219H15.0318C15.1177 7.74219 15.188 7.67188 15.188 7.58594V6.41406C15.188 6.32812 15.1177 6.25781 15.0318 6.25781Z"
                    fill="#050505"
                    fillOpacity="0.45"
                />
            </svg>
        </SvgContainer>
    );
};

export default ArrowBackIcon;
