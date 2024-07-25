import Image from "next/image";
import { useContext } from "react";
import { BsSkipEndFill } from "react-icons/bs";

//Contexts
import { GameContext } from "@/contexts/GameContext";

//Types
import { specieInfo } from "@/types/specie";

interface defaultProps {
    counter: number;
    specie: specieInfo;
}

export default function Default({ specie, counter }: defaultProps) {
    const { dispatchGame } = useContext(GameContext);

    return (
        <div className="flex">
            <div className="flex-1 flex items-center font-bold capitalize">
                <Image
                    src={specie.imageUrl}
                    alt={`imagem da espécie ${specie.name}`}
                    width={200}
                    height={200}
                    priority
                    className="w-20 sm:w-24"
                />
                <div className="ml-1 text-sm sm:text-base truncate">{specie.name}</div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="w-8 sm:w-10 aspect-square flex items-center justify-center rounded-full bg-white font-bold text-background-complementary">
                    {counter}
                </div>

                <button
                    className="px-4 pt-2 flex items-center font-bold text-md sm:text-xl"
                    onClick={() => {
                        dispatchGame({ type: "next" });
                    }}
                >
                    Pular <BsSkipEndFill className="text-xl sm:text-2xl" />
                </button>
            </div>
        </div>
    );
}
