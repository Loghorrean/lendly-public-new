import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const GetDownIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_48, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="36" height="43" viewBox="0 0 36 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.0377 33.9568L4.34351 2.7793L18.0377 7.81543L31.6565 2.7793L18.0377 33.9568Z" stroke="#363637" strokeWidth="3"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M18.021 24.14L11.8756 10.108L18.0283 13.173L24.2304 10.1175L18.021 24.14Z" fill="#05B768"/>
                <path d="M1.54297 31.6211V41.221H34.457V31.6211" stroke="#363637" strokeWidth="3"/>
            </svg>
        </SvgContainer>
    );
}

export default GetDownIcon;
