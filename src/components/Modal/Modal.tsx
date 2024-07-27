import React from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
    title: string;
    close: () => void;
    children: React.ReactNode;
}

export default function Modal({ title, close, children }: ModalProps) {
    return (
        <div
            className="fixed inset-0 z-40 w-full min-w-[320px] h-full bg-black bg-opacity-70 px-4 py-16 flex items-center justify-center"
            onClick={close}
        >
            <div
                className="z-50 w-full max-w-xl max-h-full flex flex-col bg-white rounded-xl overflow-hidden shadow-lg"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="bg-background-complementary text-white flex justify-between items-start px-4 py-2">
                    <div className="self-center text-lg font-bold">{title}</div>

                    <button className="text-4xl" onClick={close}>
                        <IoClose />
                    </button>
                </div>

                <div className="p-4 overflow-y-auto ">{children}</div>
            </div>
        </div>
    );
}
