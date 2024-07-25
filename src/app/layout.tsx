import MyContextsProviders from "@/components/MyContextsProviders/MyContextsProviders";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <html lang="pt-BR" className="w-full min-w-80 h-full min-h-dvh">
            <MyContextsProviders>
                <body
                    className={`${inter.className} my-layout w-full max-w-screen-2xl h-full max-h-dvh my-0 mx-auto bg-background`}
                >
                    <AppHeader />
                    {children}
                </body>
            </MyContextsProviders>
        </html>
    );
}
