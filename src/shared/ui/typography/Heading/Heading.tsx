import React, { AllHTMLAttributes, FC } from "react";
import styles from "./Heading.module.scss";
import { cn, ObjectValues } from "@/src/shared/utils";

export const HEADING_TYPE = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
} as const;

export type HeadingType = ObjectValues<typeof HEADING_TYPE>;

export type HeadingProps = AllHTMLAttributes<HTMLHeadingElement>;

interface Props extends HeadingProps {
    headingType: HeadingType;
}

const Heading: FC<Props> = ({ headingType, children, ...props }) => {
    return React.createElement(headingType, { ...props, className: cn(styles.heading, props.className) }, children);
};

export default Heading;
