import Image from "next/image";
import Link from "next/link";

export default function AppHeader() {
    return (
        <header className="flex flex-col items-center justify-center space-y-4 px-4 py-2">
            <Link href="/">
                <Image
                    src="/assets/images/Logo.png"
                    alt="Logo Poke Bingo"
                    width={100}
                    height={100}
                    className="w-auto h-12"
                />
            </Link>
        </header>
    );
}
