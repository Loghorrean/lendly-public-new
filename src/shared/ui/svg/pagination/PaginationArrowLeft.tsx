"use client";

import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

type Props = SvgProps & {
    active: boolean;
};

const PaginationArrowLeft = ({ size = SVG_CONTAINER_SIZE.SIZE_14, active, ...props }: Props) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.89846 1.98381V0.926979C6.89846 0.835377 6.79318 0.784791 6.72209 0.840846L0.558809 5.65471C0.506443 5.69544 0.464071 5.74758 0.434924 5.80717C0.405777 5.86676 0.390625 5.93222 0.390625 5.99856C0.390625 6.0649 0.405777 6.13036 0.434924 6.18995C0.464071 6.24954 0.506443 6.30168 0.558809 6.34241L6.72209 11.1563C6.79455 11.2123 6.89846 11.1617 6.89846 11.0701V10.0133C6.89846 9.94631 6.86701 9.88206 6.81506 9.84104L1.89318 5.99924L6.81506 2.15608C6.86701 2.11506 6.89846 2.05081 6.89846 1.98381Z"
                    fill="#050505"
                    fillOpacity={active ? "0.88" : "0.25"}
                />
            </svg>
        </SvgContainer>
    );
};

export default PaginationArrowLeft;
