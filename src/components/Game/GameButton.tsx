import Image from "next/image";
import { FaCheck } from "react-icons/fa";

//Contexts
import { GameContext } from "@/contexts/GameContext";

//Contexts
import { useContext } from "react";

//Types
import { gameStatus, gameTypes } from "@/types/game";

export default function GameButton({ type }: { type: gameTypes }) {
    const { game, dispatchGame } = useContext(GameContext);

    function handleCheck() {
        if (game) {
            if (game.gameSpecies[game.index].types.includes(type.name)) {
                dispatchGame({ type: "check", target: type.name });
                return;
            }

            dispatchGame({ type: "next" });
        }
    }

    return (
        <div className="w-full h-full aspect-square flex items-center justify-center rounded-xl overflow-hidden [&:nth-child(even)]:bg-background-light-100">
            {!type.checked && (
                <button
                    className="w-full h-full flex flex-col items-center justify-center space-y-1 p-2 hover:bg-background"
                    onClick={() => handleCheck()}
                    disabled={type.checked || !(game?.status === gameStatus.playing)}
                >
                    <Image
                        src={`assets/images/specieTypes/${type.name}.svg`}
                        width={200}
                        height={200}
                        priority
                        alt={`simbolo que representa o tipo ${type.name}`}
                        className="w-9/12 aspect-square"
                    />
                    <span className="w-full capitalize font-bold text-sm sm:text-md">{type.name}</span>
                </button>
            )}

            {type.checked && (
                <div className="w-full aspect-square flex items-center justify-center bg-success">
                    <FaCheck className="text-white text-2xl sm:text-4xl" />
                </div>
            )}
        </div>
    );
}
