"use client";

import React, { ComponentProps, PropsWithChildren } from "react";
import Link from "next/link";
import { resultIf } from "@/src/shared/utils";
import { usePathname } from "next/navigation";

export type ProjectLinkProps = ComponentProps<typeof Link> & {
    explicitActive?: boolean;
};

function ProjectLink(
    { href, children, explicitActive, ...props }: PropsWithChildren<ProjectLinkProps>,
    ref: ProjectLinkProps["ref"]
) {
    const pathname = usePathname();
    return (
        <Link
            {...props}
            ref={ref}
            href={href}
            aria-current={resultIf(pathname === href || explicitActive, "page")}
        >
            {children}
        </Link>
    );
}

export default React.forwardRef(ProjectLink);
