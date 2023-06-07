import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const ChartIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_48, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.5999 24.5999C40.5999 28.3973 39.4739 32.1094 37.3642 35.2668C35.2544 38.4243 32.2558 40.8852 28.7475 42.3384C25.2391 43.7916 21.3787 44.1718 17.6542 43.431C13.9298 42.6901 10.5087 40.8615 7.8235 38.1764C5.13833 35.4912 3.30971 32.0701 2.56887 28.3456C1.82804 24.6212 2.20826 20.7607 3.66146 17.2524C5.11467 13.744 7.57558 10.7454 10.733 8.63569C13.8904 6.52596 17.6025 5.3999 21.4 5.3999L21.4 24.5999H40.5999Z" stroke="white" strokeWidth="3"/>
                <path d="M45.399 19.8001C45.399 17.2787 44.9024 14.782 43.9375 12.4526C42.9726 10.1231 41.5584 8.00653 39.7755 6.22365C37.9926 4.44076 35.876 3.0265 33.5465 2.06161C31.2171 1.09672 28.7204 0.600098 26.199 0.600098V19.8001H45.399Z" fill="#05B768"/>
            </svg>
        </SvgContainer>
    );
}

export default ChartIcon;
