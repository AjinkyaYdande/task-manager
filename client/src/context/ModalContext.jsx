import { createContext, useContext, useState } from "react";

const ModalContext = createContext()

export const ModalProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        console.log("modelContext =>", isOpen, openModal, closeModal),
        <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>

    )
}

export const useModal = () => useContext(ModalContext)