import React from "react";

//Contexts
import GameContextProvider from "@/contexts/GameContext";

export default function MyContextsProviders({ children }: { children: React.ReactNode }) {
    return <GameContextProvider>{children}</GameContextProvider>;
}
