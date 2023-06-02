import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const RubleSvg = ({ size = SVG_CONTAINER_SIZE.SIZE_40, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#212226"/>
                <path d="M12.888 13.292H10.776V14.284H14.6V15.692H10.776V17.5H8.92V15.692H7.576V14.284H8.92V13.292H7.576V11.708H8.92V6.62H12.968C14.1413 6.62 15.0587 6.892 15.72 7.436C16.3813 7.98 16.712 8.812 16.712 9.932C16.712 11.0413 16.376 11.8787 15.704 12.444C15.0427 13.0093 14.104 13.292 12.888 13.292ZM10.776 8.188V11.708H12.904C13.5973 11.708 14.0987 11.5533 14.408 11.244C14.728 10.9347 14.888 10.5027 14.888 9.948C14.888 9.38267 14.728 8.95067 14.408 8.652C14.088 8.34267 13.592 8.188 12.92 8.188H10.776Z" fill="white"/>
            </svg>
        </SvgContainer>
    );
}

export default RubleSvg;
