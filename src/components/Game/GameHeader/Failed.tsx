//Components
import RestartButton from "./RestartButton";

export default function Failed() {
    return (
        <div className="flex flex-col items-center space-y-2 pb-1">
            <p className="text-xl sm:text-2xl font-bold">Você perdeu</p>
            <RestartButton />
        </div>
    );
}
