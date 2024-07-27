"use client";

import { createContext, useState } from "react";

interface modalContextProps {
    modals: { [modal: string]: boolean };
    openModal: (modalId: string) => void;
    closeModal: (modalId: string) => void;
}

const DEFAULT_VALUE = {
    modals: {},
    openModal: (modalId: string) => {},
    closeModal: (modalId: string) => {},
};

export const ModalContext = createContext<modalContextProps>(DEFAULT_VALUE);

export default function ModalContextProvider({ children }: { children: React.ReactNode }) {
    const [modals, setModals] = useState({});

    const openModal = (modalId: string) => setModals({ ...modals, [modalId]: true });
    const closeModal = (modalId: string) => setModals({ ...modals, [modalId]: false });

    return <ModalContext.Provider value={{ modals, openModal, closeModal }}>{children}</ModalContext.Provider>;
}
