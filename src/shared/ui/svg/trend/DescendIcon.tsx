import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const DescendIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_20, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M17.0845 11.7026L16.6157 7.81199C16.6001 7.68309 16.4419 7.6284 16.3501 7.72019L15.1919 8.88035L9.89305 3.58348C9.77 3.46238 9.57273 3.46238 9.45164 3.58348L7.46336 5.5698L2.05906 0.165508C2.0297 0.136429 1.99004 0.120117 1.94871 0.120117C1.90738 0.120117 1.86773 0.136429 1.83836 0.165508L0.959453 1.04832C0.930375 1.07769 0.914062 1.11734 0.914062 1.15867C0.914062 1.2 0.930375 1.23966 0.959453 1.26902L7.24266 7.55613C7.36375 7.67918 7.56297 7.67918 7.68406 7.55613L9.67234 5.5698L14.0884 9.98387L12.9302 11.1421C12.9095 11.1628 12.8951 11.189 12.8886 11.2175C12.882 11.246 12.8836 11.2758 12.8932 11.3035C12.9028 11.3312 12.9199 11.3556 12.9427 11.374C12.9654 11.3925 12.9929 11.4041 13.022 11.4077L16.9126 11.8764C17.0122 11.8901 17.0981 11.8042 17.0845 11.7026Z"
                    fill="#FF4D4F"
                />
            </svg>
        </SvgContainer>
    );
};

export default DescendIcon;
