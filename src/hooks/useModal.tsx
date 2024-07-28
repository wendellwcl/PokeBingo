/**
 * "useModal()" is a custom hook to manage display states of modal elements.
 * ("useModal()" is used within the "ModalContext".)
 *
 * @param {modalId: string} - an ID referring to a modal element (this ID does not necessarily need to be the ID attribute of the modal html element).
 * @returns {isOpen: boolean} - the state of the modal.
 * @returns {open: function} - function to display the modal.
 * @returns {close: function} - function to close the modal.
 */

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
