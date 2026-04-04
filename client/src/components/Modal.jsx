import { useModal } from "../context/ModalContext"
import Button from "./Button"

function Modal() {
    console.log("modal.jsx");
    const { isOpen, closeModal } = useModal();

    if (!isOpen) return null;
    else {
        console.log("called");
    }
    return (
        <>
            <section className="modal-section">
                <div className="modal-main" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-title">
                        Title
                    </div>
                    <div className="modal-body">
                        Body
                    </div>
                    <div className="modal-footer">
                        Footer
                        <div className="modal-action">
                            <Button label="Submit" />
                            <Button label="Close"
                                onClick={closeModal} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Modal;