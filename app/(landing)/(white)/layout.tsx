"use client";

import {PropsWithChildren} from "react";
import MainContent from "@/src/widgets/layout/MainContent";
import styles from "./styles.module.scss";
import ActionMessageContainer from "@/src/shared/action-messages/ui/ActionMessageContainer";
import dayjs from "dayjs";
import {notFound} from "next/navigation";
require("dayjs/locale/ru");

export default function RootLayout({
  children
}: PropsWithChildren) {
    try {
        dayjs.locale("ru");
    } catch (error) {
        notFound();
    }
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
