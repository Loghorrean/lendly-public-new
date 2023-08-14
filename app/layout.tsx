import {PropsWithChildren} from "react";
import "@/src/main/index.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Providers from "@/src/main/providers/Providers";
import ActionMessageContainer from "@/src/shared/action-messages/ui/ActionMessageContainer";

export const metadata = {
    title: 'Lendly',
    description: 'Lendly',
}

export default function MainLayout({ children }: PropsWithChildren) {
    return (
        <html lang="ru">
            <Providers>
                { children }
            </Providers>
        </html>
    );
}