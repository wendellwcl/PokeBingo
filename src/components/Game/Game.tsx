//Types
import { specieInfo } from "@/types/specie";

interface GameProps {
    species: specieInfo[];
    speciesTypes: string[];
}

export default function Game({ species, speciesTypes }: GameProps) {
    return (
        <div>
            <h2>Types</h2>

            {speciesTypes?.map((type, idx) => (
                <div key={idx}>{type}</div>
            ))}

            <br />

            <h2>Species</h2>
            {species?.map((item, idx) => (
                <div key={idx}>
                    {item.name} -{" "}
                    {item.types.map((type, idx) => (
                        <span key={idx}>{type} </span>
                    ))}
                </div>
            ))}
        </div>
    );
}
