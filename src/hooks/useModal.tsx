import { useContext } from "react";

//Contexts
import { ModalContext } from "@/contexts/ModalContext";

export default function useModal(modalId: string) {
    const modalContext = useContext(ModalContext);

    if (!modalContext) {
        throw new Error("useModal must be used within a ModalContext");
    }

    const { modals, openModal, closeModal } = modalContext;

    return {
        isOpen: modals[modalId] || false,
        open: () => openModal(modalId),
        close: () => closeModal(modalId),
    };
}
