import React, { PropsWithChildren } from "react";
import { LinkProps as NextLinkProps } from "next/link";

export type LinkProps = PropsWithChildren<
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> & NextLinkProps
>;
