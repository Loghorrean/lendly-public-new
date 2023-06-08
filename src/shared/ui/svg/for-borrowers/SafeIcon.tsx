import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const SafeIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_48, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="34" height="42" viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.11572" y="2" width="30.1714" height="38.4" stroke="#363637" strokeWidth="3"/>
                <circle cx="17.2017" cy="10.2285" r="4.11429" fill="#363637"/>
                <circle cx="17.2017" cy="21.2002" r="4.11429" fill="#05B768"/>
                <circle cx="17.2017" cy="32.1717" r="4.11429" fill="#363637"/>
                <path d="M8.33936 21.2H26.0624" stroke="#05B768" strokeWidth="3"/>
            </svg>
        </SvgContainer>
    );
}

export default SafeIcon;
