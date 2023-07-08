"use client";

import {PropsWithChildren} from "react";
import {Content} from "@/src/shared/ui/layout";
import {CONTENT_TYPE} from "@/src/shared/ui/layout/Content/Content";
import AuthHeader from "@/src/widgets/auth/AuthHeader";
import Main from "@/src/shared/ui/layout/Main";
import styles from "./styles.module.scss";
import AuthLinks from "@/src/widgets/auth/AuthLinks";

export default function AuthLayout({ children }: PropsWithChildren) {
    return (
        <body>
        <Content type={CONTENT_TYPE.NO_FOOTER}>
            <AuthHeader />
            <Main>
                <div className={styles.auth_container}>
                    <div className={styles.auth_container__links}>
                        <AuthLinks />
                    </div>
                    { children }
                </div>
            </Main>
        </Content>
        </body>
    );
}