import { ReactNode } from "react";
import { mainFont } from "/app/fonts";
import Header from "/app/header";
import "/styles/globals.css";

interface IProps {
  children: ReactNode;
}
export default function Layout({ children }: IProps) {
  return (
    <html lang="en">
      <head>
        <title>News Homepage - Frontend Mentor - Tuan Nguyen</title>
      </head>
      <body className={mainFont.className + "bg-off-white"}>
        <Header />
        <main className="mx-auto mb-8 max-w-sm space-y-16 xl:max-w-screen-xl xl:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
