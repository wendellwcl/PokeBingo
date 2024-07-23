//Components
import Countdown from "./Countdown";
import RestartButton from "./RestartButton";

export default function Success() {
    return (
        <div className="flex flex-col items-center pb-1">
            <p className="text-xl sm:text-2xl font-bold">Parabéns</p>
            <p className="text-center text-sm mb-2">
                Você completou o jogo de hoje. Novo jogo em: <Countdown />
            </p>
            <RestartButton />
        </div>
    );
}
