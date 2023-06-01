"use client";

import Overlay from "@/src/shared/ui/layout/overlay/Overlay";
import {useOverlay} from "@/src/shared/ui/layout/overlay/Overlay/store";
import {Content} from "@/src/shared/ui/layout";
import Header from "@/src/widgets/layout/Header";
import Main from "@/src/shared/ui/layout/Main";
import {PropsWithChildren} from "react";
import Footer from "@/src/widgets/layout/Footer";

const MainContent = ({ children }: PropsWithChildren) => {
    const { overlayActive } = useOverlay();
    return (
        <>
            <Overlay />
            <Content aria-hidden={overlayActive}>
                <Header />
                <Main>
                    {children}
                </Main>
                <Footer />
            </Content>
        </>
    );
}

export default MainContent;
