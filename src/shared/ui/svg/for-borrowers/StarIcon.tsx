import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const StarIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_48, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.2001 3.2L28.6595 17.2858L43.7429 18.1252L32.0335 27.6701L35.8963 42.2748L23.2001 34.088L10.5039 42.2748L14.3667 27.6701L2.65728 18.1252L17.7407 17.2858L23.2001 3.2Z" stroke="white" strokeWidth="3"/>
                <path d="M23.2002 12.8L26.2332 20.6255L34.6129 21.0918L28.1076 26.3945L30.2536 34.5082L23.2002 29.96L16.1468 34.5082L18.2927 26.3945L11.7875 21.0918L20.1672 20.6255L23.2002 12.8Z" fill="#05B768"/>
            </svg>
        </SvgContainer>
    );
}

export default StarIcon;
