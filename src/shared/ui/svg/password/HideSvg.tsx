import React from "react";
import SvgContainer from "../SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const HideSvg = ({ size = SVG_CONTAINER_SIZE.SIZE_16, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.50818 5C2.50818 5 3.03427 5.92206 4.01895 6.81965M13.4916 5C13.4916 5 12.9655 5.92206 11.9808 6.81965M7.99987 8.5C9.70085 8.5 11.047 7.67083 11.9808 6.81965M7.99987 8.5V11M7.99987 8.5C6.29888 8.5 4.95272 7.67083 4.01895 6.81965M11.9808 6.81965L14 8.75M4.01895 6.81965L2 8.75" stroke="#404043" strokeWidth="2.09208" strokeLinecap="square" strokeLinejoin="round"/>
            </svg>
        </SvgContainer>
    );
};

export default HideSvg;
