import { useState } from "react";
import { useModal } from "../context/ModalContext"
import Button from "./Button"
import InputField from "./InputField";

function Modal({ refreshTask }) {
    console.log(refreshTask, "refreshTask");
    const { isOpen, closeModal } = useModal();

    const [task, setTask] = useState("");
    const [status, setStatus] = useState("");

    if (!isOpen) return null;


    const handleSubmit = () => {
        addNewTask();
    }

    const addNewTask = async () => {
        try {
            if (!task & !status) {
                alert("Enter Task & Status");
            } else if (!task) {
                alert("Enter Task");
            } else if (!status) {
                alert("Enter Status");
            } else {
                const API_URL = import.meta.env.VITE_APP_URL
                const response = await fetch(`${API_URL}/tasks/addTask`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ task, status })
                })
                const result = await response.json();
                console.log(result, "result");
                alert("Task added successfully");
                // refreshTask();
                closeModal();
                setTask("");
                setStatus("");

            }
        } catch (error) {
            console.log(error, "error");
        }
    }

    return (
        <>
            <section className="modal-section">
                <div className="modal-main" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-title">
                        Add New Task
                    </div>
                    <div className="modal-body">
                        <InputField
                            placeHolder="Task"
                            label="Task"
                            onChange={(e) => setTask(e.target.value)}
                            value={task}
                        />
                        <InputField
                            placeHolder="Status"
                            label="Status"
                            onChange={(e) => setStatus(e.target.value)}
                            value={status}
                        />
                    </div>
                    <div className="modal-footer">
                        <div className="modal-action">
                            <Button label="Submit"
                                className="modal-submit"
                                onClick={() => handleSubmit()}
                            />
                            <Button label="Close"
                                className="modal-close"
                                onClick={closeModal} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Modal;