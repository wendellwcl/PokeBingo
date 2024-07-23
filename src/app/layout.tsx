import MyContextsProviders from "@/components/MyContextsProviders/MyContextsProviders";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Poke Bingo",
    description: "Poke Bingo",
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
                    className={`${inter.className} my-layout w-full max-w-screen-2xl h-full my-0 mx-auto bg-background`}
                >
                    <header>HEADER</header>
                    {children}
                </body>
            </MyContextsProviders>
        </html>
    );
}
