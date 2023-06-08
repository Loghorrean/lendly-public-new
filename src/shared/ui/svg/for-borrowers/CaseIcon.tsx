import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

type Props = SvgProps & {
    black?: boolean;
}

const CaseIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_48, black, ...props }: Props) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="48" height="39" viewBox="0 0 48 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="41.231" y="14.8923" width="17.2308" height="34.4615" transform="rotate(90 41.231 14.8923)" fill={black ? "#000" : "#05B768"} />
                <rect x="46.3999" y="9.72308" width="27.5692" height="44.8" transform="rotate(90 46.3999 9.72308)" stroke="white" strokeWidth="3"/>
                <path d="M11.2002 1.59988V9.59988H36.8002V1.59988H11.2002Z" stroke="white" strokeWidth="3"/>
                <path d="M1.6001 9.72308V8.22308C0.975581 8.22308 0.416407 8.61002 0.196326 9.19447C-0.0237563 9.77892 0.141308 10.4386 0.610709 10.8505L1.6001 9.72308ZM17.308 23.5077L16.3186 24.6351L16.7432 25.0077H17.308V23.5077ZM31.0926 23.5077V25.0077H31.6875L32.1207 24.6L31.0926 23.5077ZM45.7388 9.72308L46.7668 10.8154C47.2147 10.3939 47.3599 9.74177 47.1332 9.17011C46.9064 8.59845 46.3538 8.22308 45.7388 8.22308V9.72308ZM0.610709 10.8505L16.3186 24.6351L18.2974 22.3803L2.58949 8.59564L0.610709 10.8505ZM17.308 25.0077H31.0926V22.0077H17.308V25.0077ZM32.1207 24.6L46.7668 10.8154L44.7108 8.63078L30.0646 22.4154L32.1207 24.6ZM1.6001 11.2231H45.7388V8.22308H1.6001V11.2231Z" fill="white"/>
            </svg>
        </SvgContainer>
    );
}

export default CaseIcon;
