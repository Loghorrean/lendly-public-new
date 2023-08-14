"use client";

import {PropsWithChildren} from "react";
import MainContent from "@/src/widgets/layout/MainContent";
import styles from "./styles.module.scss";
import ActionMessageContainer from "@/src/shared/action-messages/ui/ActionMessageContainer";

export default function RootLayout({
  children
}: PropsWithChildren) {
  return (
    <body className={styles.body}>
      <div id="top"></div>
      <MainContent>
        {children}
      </MainContent>
      <ActionMessageContainer />
    </body>
  )
}
