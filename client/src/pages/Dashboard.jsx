import { useEffect, useState } from "react";
import GraphicalComponents from "../components/GraphicalComponents";
import Header from "../components/Header";
import TaskComoponent from "../components/TaskComponent";
import Modal from "../components/Modal";

const Dashboard = () => {

    const [tableData, setTableData] = useState([]);

    const getAllTasks = async () => {
        try {
            const API_URL = import.meta.env.VITE_APP_URL;
            const response = await fetch(`${API_URL}/tasks/allTasks`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await response.json();
            console.log(data, "response get all task");
            setTableData(data)

        } catch (error) {
            console.log(error, "error getAllTask");
        }
    }

    useEffect(() => {
        getAllTasks();
    }, []);

    return (
        <>

            <div>
                <Header />
                <div className="tasks-hero">
                    <TaskComoponent
                        data={tableData}
                    />
                    <GraphicalComponents />
                    <Modal refreshTask={getAllTasks} />
                </div>
            </div>

        </>
    )

}

export default Dashboard;