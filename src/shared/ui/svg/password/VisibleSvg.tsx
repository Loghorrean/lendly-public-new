import React from "react";
import SvgContainer from "../SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const VisibleSvg = ({ size = SVG_CONTAINER_SIZE.SIZE_16, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8C2 8 4.18182 4 8 4C11.8182 4 14 8 14 8C14 8 11.8182 12 8 12C4.18182 12 2 8 2 8Z" stroke="#404043" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="#404043"/>
            </svg>
        </SvgContainer>
    );
};

export default VisibleSvg;
