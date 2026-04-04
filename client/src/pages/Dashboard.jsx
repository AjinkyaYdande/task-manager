import GraphicalComponents from "../components/GraphicalComponents";
import Header from "../components/Header";
import TaskComoponent from "../components/TaskComponent";

const Dashboard = () => {
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