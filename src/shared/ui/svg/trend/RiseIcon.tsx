import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const RiseIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_20, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M17.9106 4.12253L14.02 4.59128C13.8911 4.60691 13.8364 4.76511 13.9282 4.85691L15.0864 6.01511L10.6723 10.4292L8.68406 8.44284C8.56102 8.3198 8.36375 8.32175 8.24266 8.44284L1.95945 14.728C1.93037 14.7574 1.91406 14.797 1.91406 14.8384C1.91406 14.8797 1.93037 14.9193 1.95945 14.9487L2.83836 15.8315C2.89891 15.8921 2.99852 15.8921 3.05906 15.8315L8.46336 10.4292L10.4497 12.4155C10.5727 12.5366 10.77 12.5366 10.8911 12.4155L16.1919 7.11862L17.3501 8.27683C17.3708 8.29748 17.397 8.31189 17.4255 8.31843C17.4541 8.32496 17.4839 8.32336 17.5115 8.3138C17.5392 8.30423 17.5636 8.28709 17.5821 8.26433C17.6005 8.24157 17.6121 8.21409 17.6157 8.18503L18.0845 4.29441C18.0981 4.1948 18.0122 4.10886 17.9106 4.12253Z"
                    fill="#52C41A"
                />
            </svg>
        </SvgContainer>
    );
};

export default RiseIcon;
