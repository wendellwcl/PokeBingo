import { useContext } from "react";

//Contexts
import { GameContext } from "@/contexts/GameContext";

export default function RestartButton() {
    const { dispatchGame } = useContext(GameContext);

    return (
        <button
            className="px-3 py-1 my-1 bg-success rounded-md font-bold text-md text-white"
            onClick={() => dispatchGame({ type: "restart" })}
        >
            Rejogar
        </button>
    );
}
