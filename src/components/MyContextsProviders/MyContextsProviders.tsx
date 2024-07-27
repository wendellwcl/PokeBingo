import React from "react";

//Contexts
import GameContextProvider from "@/contexts/GameContext";
import ModalContextProvider from "@/contexts/ModalContext";

export default function MyContextsProviders({ children }: { children: React.ReactNode }) {
    return (
        <ModalContextProvider>
            <GameContextProvider>{children}</GameContextProvider>
        </ModalContextProvider>
    );
}
