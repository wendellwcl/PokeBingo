import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center text-text-complementary">
            <p className="text-xl mb-8 text-center font-bold">
                <span className="text-8xl">404</span>
                <br />
                Recurso não encontrado
            </p>

            <Link
                href="/"
                className="flex items-center gap-2 p-4 mb-12 text-2xl text-text-complementary font-bold hover:text-white transition"
            >
                <IoMdArrowRoundBack />
                Home
            </Link>
        </div>
    );
}
