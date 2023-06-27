import {PropsWithChildren} from "react";
import MainContent from "@/src/widgets/layout/MainContent";
import styles from "./styles.module.scss";

export default function RootLayout({
  children
}: PropsWithChildren) {
  return (
    <body className={styles.body}>
      <div id="top"></div>
      <MainContent>
        {children}
      </MainContent>
    </body>
  )
}
