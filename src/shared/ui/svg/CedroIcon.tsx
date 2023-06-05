import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import {SvgProps} from "@/src/shared/ui/svg/SvgProps";
import {SVG_CONTAINER_SIZE} from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const CedroIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_16, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.20415 0.5H7.92572C7.96982 0.5 8.01211 0.518055 8.04329 0.550193C8.07447 0.582331 8.09199 0.62592 8.09199 0.67137V15.183C8.09199 15.2284 8.07447 15.272 8.04329 15.3041C8.01211 15.3363 7.96982 15.3543 7.92572 15.3543H7.20415C6.2578 15.3543 5.32073 15.1622 4.44647 14.7888C3.57221 14.4154 2.77788 13.8681 2.10887 13.1783C1.43986 12.4884 0.909276 11.6694 0.547429 10.7681C0.185582 9.86681 -0.000436039 8.90086 7.67494e-07 7.92545C7.67494e-07 5.9561 0.759007 4.06741 2.11005 2.67486C3.46109 1.28232 5.29349 0.5 7.20415 0.5V0.5Z" fill="white"/>
                <path d="M15.8046 0.501465H10.0768C9.98315 0.501465 9.90723 0.579724 9.90723 0.676262V6.82845C9.90723 6.92499 9.98315 7.00325 10.0768 7.00325H15.8046C15.8982 7.00325 15.9742 6.92499 15.9742 6.82845V0.676262C15.9742 0.579724 15.8982 0.501465 15.8046 0.501465Z" fill="white"/>
                <path d="M15.8046 8.79736H10.0768C9.98315 8.79736 9.90723 8.87562 9.90723 8.97216V15.174C9.90723 15.2706 9.98315 15.3488 10.0768 15.3488H15.8046C15.8982 15.3488 15.9742 15.2706 15.9742 15.174V8.97216C15.9742 8.87562 15.8982 8.79736 15.8046 8.79736Z" fill="white"/>
            </svg>
        </SvgContainer>
    );
}

export default CedroIcon;