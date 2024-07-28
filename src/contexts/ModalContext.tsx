"use client";

/**
 * "ModalContext" manages and stores the display state of "Modal" elements.
 * (Is used inside the "useModal" custom hook).
 *
 * @returns {modals: {[modalId: string]: boolean}} - a list of Modal elements and their respective display state.
 * @returns {openModal: function} - function to open a modal.
 * @returns {closeModal: function} - function to close a modal.
 */

import { createContext, useState } from "react";

interface modalContextProps {
    modals: { [modal: string]: boolean };
    openModal: (modalId: string) => void;
    closeModal: (modalId: string) => void;
}

const DEFAULT_VALUE = {
    modals: {},
    openModal: () => {},
    closeModal: () => {},
};

export const ModalContext = createContext<modalContextProps>(DEFAULT_VALUE);

export default function ModalContextProvider({ children }: { children: React.ReactNode }) {
    const [modals, setModals] = useState({});

    const openModal = (modalId: string) => setModals({ ...modals, [modalId]: true });
    const closeModal = (modalId: string) => setModals({ ...modals, [modalId]: false });

    return <ModalContext.Provider value={{ modals, openModal, closeModal }}>{children}</ModalContext.Provider>;
}
