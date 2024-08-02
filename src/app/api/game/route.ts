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
export async function PUT(request: Request) {
    console.log("PUT");
    try {
        console.log("api 1");
        const client = await clientPromise;
        console.log("api 2");
        const db = client.db("pokeBingo");
        console.log("api 3");
        const req: dbGameProps = await request.json();
        console.log("api 4");

        await db
            .collection("game")
            .updateOne(
                { refName: "pokeBingo" },
                { $set: { refName: "pokeBingo", date: req.date, types: req.types, species: req.species } }
            );
        console.log("api 5");

        const response = NextResponse.json(req);
        response.headers.set("Access-Control-Allow-Origin", "*");
        response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        response.headers.set("Access-Control-Allow-Headers", "Content-Type");

        return response;
    } catch (error) {
        console.log("Error updating game database:", error);

        return NextResponse.json({ success: false, message: "Failed to update game database" }, { status: 500 });
    }
}
