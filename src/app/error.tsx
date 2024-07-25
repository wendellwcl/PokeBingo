"use client";

export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center text-text-complementary">
            <p className="text-lg text-center font-bold">
                <span className="text-4xl">Oops!</span>
                <br />
                Algo deu errado. Tente novamente mais tarde.
            </p>
        </div>
    );
}
