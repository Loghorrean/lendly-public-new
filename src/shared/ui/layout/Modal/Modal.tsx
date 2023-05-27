"use client";

import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import ModalContextProvider, { ModalContextType } from "./context/ModalContext";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import styles from "./Modal.module.scss";
import { BlockProps, ClosableElementProps, cn } from "@/src/shared/utils";
import { useSyncWithSecondaryOverlay } from "@/src/shared/ui/layout/overlay/SecondaryOverlay/useSyncWithSecondaryOverlay";
import ModalHeader from "@/src/shared/ui/layout/Modal/composables/ModalHeader";
import ModalFooter from "@/src/shared/ui/layout/Modal/composables/ModalFooter";

export type ModalProps = BlockProps & ClosableElementProps;

const Modal = ({ active, onClose, children, ...props }: PropsWithChildren<ModalProps>) => {
    const elRef = useRef<HTMLElement | null>(null);
    const [domReady, setDomReady] = useState(false);
    useSyncWithSecondaryOverlay(active, onClose);

    useEffect(() => {
        setDomReady(true);
        if (elRef.current === null) {
            elRef.current = document.getElementById("modal-container");
        }
    }, []);

    const value: ModalContextType = {
        onClose: onClose,
    };

    return (
        <>
            {domReady &&
                createPortal(
                    <>
                        <CSSTransition
                            in={active}
                            timeout={500}
                            classNames={{
                                enter: styles.modal___enter,
                                enterActive: styles.modal___enter_active,
                                enterDone: styles.modal___enter_done,
                                exit: styles.modal___exit,
                                exitActive: styles.modal___exit_active,
                                exitDone: styles.modal___exit_done,
                            }}
                            mountOnEnter
                            unmountOnExit
                        >
                            <div
                                {...props}
                                className={cn(styles.modal, props.className)}
                                aria-hidden={!active}
                                aria-describedby="modal-description"
                            >
                                <ModalContextProvider {...value}>
                                    <p className={styles.modal__screen_reader} id="modal-description">
                                        This is a dialog window which overlays the main content of the page. You can
                                        press &apos;Esc&apos; on your keyboard or click anywhere outside this block to
                                        close it.
                                    </p>
                                    <div className={styles.modal__content}>{children}</div>
                                </ModalContextProvider>
                            </div>
                        </CSSTransition>
                    </>,
                    elRef.current!
                )}
        </>
    );
};

Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;

export default Modal;
