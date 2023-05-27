import { SVGAttributes } from "react";
import { SvgContainerSize } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

export type SvgProps = SVGAttributes<SVGElement> & {
    size?: SvgContainerSize;
};
