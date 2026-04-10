import { useEffect } from "react";
import GraphicalComponents from "../components/GraphicalComponents";
import Header from "../components/Header";
import TaskComoponent from "../components/TaskComponent";

const Dashboard = () => {

    const getAllUsers = () => {
        try {
            const API_URL = import.meta.env.VITE_APP_URL;
            fetch(`${API_URL}/auth/users`)
                .then(result => result.json)
                .then(response => {
                    console.log(response);
                });
            console.log("usEffect called");
        } catch (error) {
            alert("Server error");
            console.log(error, "error");
        }
    }

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <>

            <div>
                <Header />
                <div className="tasks-hero">
                    <TaskComoponent />
                    <GraphicalComponents />
                </div>
            </div>

        </>
    )

}

export default Dashboard;