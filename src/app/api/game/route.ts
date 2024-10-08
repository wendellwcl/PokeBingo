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
    try {
        const client = await clientPromise;
        const db = client.db("pokeBingo");

        const data = await db.collection("game").findOne({ refName: "pokeBingo" });

        return NextResponse.json(data);
    } catch (error) {
        console.error("Error fetching game data from database", error);

        return NextResponse.json(
            { success: false, message: "Failed to fetch game data from database" },
            { status: 500 }
        );
    }
}

//Establishes connection to the game-related database to update game data.
export async function POST(request: Request) {
    try {
        const client = await clientPromise;
        const db = client.db("pokeBingo");
        const req: dbGameProps = await request.json();

        await db
            .collection("game")
            .updateOne(
                { refName: "pokeBingo" },
                { $set: { refName: "pokeBingo", date: req.date, types: req.types, species: req.species } }
            );

        return NextResponse.json(req);
    } catch (error) {
        console.log("Error updating game database:", error);

        return NextResponse.json({ success: false, message: "Failed to update game database" }, { status: 500 });
    }
}
