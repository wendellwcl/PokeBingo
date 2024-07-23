//Components
import Default from "./Default";
import Failed from "./Failed";
import Success from "./Success";

//Types
import { gameStatus } from "@/types/game";
import { specieInfo } from "@/types/specie";

interface GameHeaderProps {
    gameStatus: gameStatus;
    counter: number;
    specie: specieInfo;
}

export default function GameHeader({ gameStatus, counter, specie }: GameHeaderProps) {
    return (
        <div className="p-2 sm:px-4 bg-background-complementary text-md sm:text-xl text-white">
            {gameStatus === "playing" && <Default specie={specie} counter={counter} />}

            {gameStatus === "success" && <Success />}

            {gameStatus === "failed" && <Failed />}
        </div>
    );
}
