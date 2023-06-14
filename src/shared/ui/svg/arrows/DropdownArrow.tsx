import React, { FC } from "react";
import SvgContainer from "../SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";

const DropdownArrow: FC<SvgProps> = ({ size, ...props }) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.7219 1.6355L5.99282 6.36461L1.27734 1.64914" stroke="#828282" strokeWidth="2" strokeLinejoin="bevel"/>
            </svg>
        </SvgContainer>
    );
};

export default DropdownArrow;
