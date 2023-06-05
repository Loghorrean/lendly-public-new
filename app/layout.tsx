import "@/src/main/index.scss";
import {PropsWithChildren} from "react";
import MainContent from "@/src/widgets/layout/MainContent";

export const metadata = {
  title: 'Lendly',
  description: 'Lendly',
}

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="ru">
      <body>
        <div id="top"></div>
        <MainContent>
          {children}
        </MainContent>
      </body>
    </html>
  )
}
