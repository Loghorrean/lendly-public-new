import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const ForBorrowersSecondIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_40, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20C15.5228 20 20 24.4772 20 30C20 35.5228 15.5228 40 10 40C4.47715 40 0 35.5228 0 30C0 24.4772 4.47715 20 10 20Z" fill="#05B768"/>
                <path d="M30 20C35.5228 20 40 24.4772 40 30C40 35.5228 35.5228 40 30 40C24.4772 40 20 35.5228 20 30C20 24.4772 24.4772 20 30 20Z" fill="#363637"/>
                <path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0Z" fill="#05B768"/>
                <path d="M30 0C35.5228 0 40 4.47715 40 10C40 15.5228 35.5228 20 30 20C24.4772 20 20 15.5228 20 10C20 4.47715 24.4772 0 30 0Z" fill="#05B768"/>
            </svg>
        </SvgContainer>
    );
}

export default ForBorrowersSecondIcon;
