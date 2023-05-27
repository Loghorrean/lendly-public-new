import './globals.css'
import {PropsWithChildren} from "react";

export const metadata = {
  title: 'Lendly',
  description: 'Lendly',
}

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
