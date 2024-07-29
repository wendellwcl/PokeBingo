import React from "react";
import { IoClose } from "react-icons/io5";

//Styles
import styles from "./Modal.module.scss";

interface ModalProps {
    title: string;
    close: () => void;
    children: React.ReactNode;
}

export default function Modal({ title, close, children }: ModalProps) {
    return (
        <>
            <div className={styles["c-modal__bg"]} onClick={close}>
                <div className={styles["c-modal__body"]} onClick={(event) => event.stopPropagation()}>
                    <div className={styles["c-modal__header"]}>
                        <h3 className={styles["c-modal__title"]}>{title}</h3>

                        <button className={styles["c-modal__close"]} onClick={close}>
                            <IoClose />
                        </button>
                    </div>

                    <div className={styles["c-modal__content"]}>{children}</div>
                </div>
            </div>
        </>
    );
}
