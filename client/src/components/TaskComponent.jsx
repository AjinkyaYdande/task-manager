import Button from '../components/Button';
import { useModal } from '../context/ModalContext';
const TaskComoponent = () => {

    const { openModal } = useModal();
    console.log(openModal, "taskCom");
    
    const addNewTask = () => {
        alert("Added new task");
    }

    return (
        <>
            <section className="task-section">
                <Button
                    label="Add new task"
                    className="add-new-heading"
                    icon="add-new"
                    imgAlt="add-new"
                    iconPath="/assets/icons/add-new-default.png"
                    // onClick={() => addNewTask()}
                    onClick={openModal}
                />
                <div className='task-table-div'>
                    <table border={0} className='task-table'>
                        <thead>
                            <tr>
                                <th>Sr. No</th>
                                <th>Task</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>MERN App</td>
                                <td>WIP</td>
                                <td>
                                    <div>
                                        <Button
                                            className="action-btn"
                                            iconPath="/assets/icons/pencil.png"
                                        />
                                        <Button
                                            className="action-btn"
                                            iconPath="/assets/icons/delete.png"
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>JS</td>
                                <td>Pending</td>
                                <td>
                                    <div>
                                        <Button
                                            className="action-btn"
                                            iconPath="/assets/icons/pencil.png"
                                        />
                                        <Button
                                            className="action-btn"
                                            iconPath="/assets/icons/delete.png"
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>DSA</td>
                                <td>Done</td>
                                <td>
                                    <div>
                                        <Button
                                            className="action-btn"
                                            iconPath="/assets/icons/pencil.png"
                                        />
                                        <Button
                                            className="action-btn"
                                            iconPath="/assets/icons/delete.png"
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>MERN App</td>
                                <td>WIP</td>
                                <td>
                                    <div>
                                        <Button
                                            className="action-btn"
                                            iconPath="/assets/icons/pencil.png"
                                        />
                                        <Button
                                            className="action-btn"
                                            iconPath="/assets/icons/delete.png"
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>JS</td>
                                <td>Pending</td>
                                <td>
                                    <div>
                                        <Button
                                            className="action-btn"
                                            iconPath="/assets/icons/pencil.png"
                                        />
                                        <Button
                                            className="action-btn"
                                            iconPath="/assets/icons/delete.png"
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>DSA</td>
                                <td>Done</td>
                                <td>
                                    <div>
                                        <Button
                                            className="action-btn"
                                            iconPath="/assets/icons/pencil.png"
                                        />
                                        <Button
                                            className="action-btn"
                                            iconPath="/assets/icons/delete.png"
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>MERN App</td>
                                <td>WIP</td>
                                <td>
                                    <div>
                                        <Button
                                            className="action-btn"
                                            iconPath="/assets/icons/pencil.png"
                                        />
                                        <Button
                                            className="action-btn"
                                            iconPath="/assets/icons/delete.png"
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>JS</td>
                                <td>Pending</td>
                                <td>
                                    <div>
                                        <Button
                                            className="action-btn"
                                            iconPath="/assets/icons/pencil.png"
                                        />
                                        <Button
                                            className="action-btn"
                                            iconPath="/assets/icons/delete.png"
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>DSA</td>
                                <td>Done</td>
                                <td>
                                    <div>
                                        <Button
                                            className="action-btn"
                                            iconPath="/assets/icons/pencil.png"
                                        />
                                        <Button
                                            className="action-btn"
                                            iconPath="/assets/icons/delete.png"
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>MERN App</td>
                                <td>WIP</td>
                                <td>
                                    <div>
                                        <Button
                                            className="action-btn"
                                            iconPath="/assets/icons/pencil.png"
                                        />
                                        <Button
                                            className="action-btn"
                                            iconPath="/assets/icons/delete.png"
                                        />
                                    </div>
                                </td>
                            </tr>

                        </tbody>

                    </table>
                    {/* <tfoot> */}
                    <div className='tfooter-divider'></div>
                    <div className='tfooter'>
                        <div className='tfooter-child'>
                            <Button
                                className="t-btn-controls"
                                iconPath="/assets/icons/left-arrow-default.png"
                                imgAlt="previous-page"
                            />

                            <Button
                                iconPath="/assets/icons/right-arrow-default.png"
                                imgAlt="next-page"
                                className="t-btn-controls" />
                        </div>

                        <div className='dropDownDiv'>

                            <div className='dropDown'>
                                <label className='t-footer-label'>Page size</label>
                                <select>
                                    <option>5</option>
                                    <option>10</option>
                                </select>

                            </div>
                        </div>

                    </div>
                    {/* </tfoot> */}

                </div>

            </section >
        </>
    )
}

export default TaskComoponent;