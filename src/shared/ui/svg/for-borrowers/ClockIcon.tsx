import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const ClockIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_48, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="23.0002" cy="23" r="20.8" stroke="white" strokeWidth="3"/>
                <path d="M36.3718 23C36.3718 25.6446 35.5875 28.2299 34.1183 30.4288C32.649 32.6277 30.5607 34.3416 28.1174 35.3536C25.674 36.3657 22.9855 36.6305 20.3917 36.1145C17.7979 35.5986 15.4153 34.3251 13.5453 32.4551C11.6753 30.585 10.4018 28.2025 9.88583 25.6087C9.36989 23.0149 9.63469 20.3263 10.6467 17.883C11.6588 15.4397 13.3726 13.3514 15.5716 11.8821C17.7705 10.4128 20.3557 9.6286 23.0003 9.6286V23H36.3718Z" fill="#05B768"/>
                <path d="M26.3716 10.4251V19.4251H36.3716" stroke="white" strokeWidth="3"/>
            </svg>
        </SvgContainer>
    );
}

export default ClockIcon;
