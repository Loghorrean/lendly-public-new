"use client";

import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

type Props = SvgProps & {
    active: boolean;
};

const PaginationArrowRight = ({ size = SVG_CONTAINER_SIZE.SIZE_14, active, ...props }: Props) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.46854 5.65558L0.305274 0.841708C0.289169 0.829029 0.269815 0.82115 0.249434 0.818975C0.229052 0.8168 0.208471 0.820417 0.190053 0.829412C0.171635 0.838407 0.156128 0.852414 0.145312 0.869825C0.134496 0.887236 0.12881 0.907344 0.128907 0.927841V1.98468C0.128907 2.05167 0.160353 2.11593 0.212306 2.15694L5.13417 6.00011L0.212306 9.84327C0.158986 9.88429 0.128907 9.94855 0.128907 10.0155V11.0724C0.128907 11.164 0.234181 11.2146 0.305274 11.1585L6.46854 6.34464C6.52092 6.30378 6.5633 6.25151 6.59245 6.19181C6.62159 6.13211 6.63674 6.06654 6.63674 6.00011C6.63674 5.93367 6.62159 5.86811 6.59245 5.80841C6.5633 5.74871 6.52092 5.69644 6.46854 5.65558Z"
                    fill="#050505"
                    fillOpacity={active ? "0.88" : "0.25"}
                />
            </svg>
        </SvgContainer>
    );
};

export default PaginationArrowRight;
