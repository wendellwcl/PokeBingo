//Types
import { specieInfo } from "./specie";

export interface gameTypes {
    name: string;
    checked: boolean;
}

export interface game {
    gameSpecies: specieInfo[];
    gameTypes: gameTypes[];
    index: number;
    hits: number;
    status: gameStatus;
}

export type gameActions =
    | { type: "init"; gameSpecies: specieInfo[]; gameTypes: string[] }
    | { type: "next" }
    | { type: "check"; target: string }
    | { type: "restart" };

export enum gameStatus {
    loading = "loading",
    playing = "playing",
    failed = "failed",
    success = "success",
}
