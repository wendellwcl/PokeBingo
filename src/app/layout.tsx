import type { Metadata } from "next";
import { Inter } from "next/font/google";

//Styles
import "./globals.css";
import styles from "./layout.module.scss";

//Components
import AppHeader from "@/components/AppHeader/AppHeader";
import MyContextsProviders from "@/components/MyContextsProviders/MyContextsProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Poke Bingo | Daily Game",
    description:
        "PokeBingo is a daily bingo challenge featuring Pokémon species. Random species will be presented and you must answer which of the species types on the bingo card they correspond to. A new bingo is generated every day.",
    keywords: ["poke bingo", "bingo", "daily", "game", "daily game", "poke", "Pokémon"],
    openGraph: {
        images: ["https://github.com/wendellwcl/PokeBingo/blob/main/public/assets/Screenshot.png"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: { index: true, follow: true, noimageindex: true },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className={styles["html"]}>
            <body className={`${inter.className} ${styles["body"]}`}>
                <AppHeader />
                <MyContextsProviders>{children}</MyContextsProviders>
            </body>
        </html>
    );
}
