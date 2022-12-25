import { ReactNode } from "react";
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
      <body>
        <Header />
        <main className="mx-auto max-w-sm space-y-16 px-8 xl:max-w-screen-xl">
          {children}
        </main>
      </body>
    </html>
  );
}
