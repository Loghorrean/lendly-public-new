import {PropsWithChildren} from "react";
import "@/src/main/index.scss";

export const metadata = {
    title: 'Lendly',
    description: 'Lendly',
}

export default function MainLayout({ children }: PropsWithChildren) {
    return (
        <html lang="ru">
            { children }
        </html>
    );
}