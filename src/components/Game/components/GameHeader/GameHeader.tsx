//Styles
import styles from "./GameHeader.module.scss";

//Components
import Default from "./components/Default/Default";
import Failed from "./components/Failed/Failed";
import Success from "./components/Success/Success";

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
        <div className={styles["c-game-header"]}>
            {gameStatus === "playing" && <Default specie={specie} counter={counter} />}

            {gameStatus === "success" && <Success />}

            {gameStatus === "failed" && <Failed />}
        </div>
    );
}
