//Styles
import styles from "./GameInterface.module.scss";

//Components
import GameButton from "../GameButton/GameButton";
import GameHeader from "../GameHeader/GameHeader";

//Types
import { game } from "@/types/game";

interface GameInterfaceProps {
    game: game;
}

export default function GameInterface({ game }: GameInterfaceProps) {
    return (
        <section className={styles["c-game-interface"]}>
            <GameHeader
                counter={game.gameSpecies.length - game.index}
                gameStatus={game.status}
                specie={game.gameSpecies[game.index]}
            />

            <div className={styles["c-game-interface__grid"]}>
                {game.gameTypes?.map((gameType, idx) => (
                    <GameButton key={idx} type={gameType} />
                ))}
            </div>
        </section>
    );
}
