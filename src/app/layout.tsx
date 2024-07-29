import MyContextsProviders from "@/components/MyContextsProviders/MyContextsProviders";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//Styles
import styles from "./layout.module.scss";

//Components
import AppHeader from "@/components/AppHeader/AppHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Poke Bingo Daily Game",
    description: "Poke Bingo Daily Game",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className={styles["html"]}>
            <MyContextsProviders>
                <body className={`${inter.className} ${styles["body"]}`}>
                    <AppHeader />
                    {children}
                </body>
            </MyContextsProviders>
        </html>
    );
}
