import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

//Types
import { specieInfo } from "@/types/specie";

interface dbGameProps {
    date: string;
    types: string[];
    species: specieInfo[];
}

//Establishes connection to the game-related database and retrieves game data.
export async function GET() {
    const client = await clientPromise;
    const db = client.db("pokeBingo");

    const data = await db.collection("game").find({ refName: "pokeBingo" }).toArray();

    return Response.json(data);
}

//Establishes connection to the game-related database to update game data.
export async function PUT(request: Request) {
    const client = await clientPromise;
    const db = client.db("pokeBingo");
    const req: dbGameProps = await request.json();

    await db
        .collection("game")
        .updateOne(
            { refName: "pokeBingo" },
            { $set: { refName: "pokeBingo", date: req.date, types: req.types, species: req.species } }
        );

    return NextResponse.json({ ...req });
}
