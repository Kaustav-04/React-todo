import React from 'react'
import classes from './Completed.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { taskActions } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { ref, set } from "firebase/database";
import { database } from '../../firebase';

export default function EachCompletedTask(props) {
    const dispatch = useDispatch();
    const pendingTasks = useSelector(state => state.task.pendingTask)
    const completedTask = useSelector(state => state.task.completedTask);
    const deleteHandler = () => {
        dispatch(taskActions.deleteTask(props.index))
        set(ref(database, '/tasks/'), {
            PendingTasks: pendingTasks,
            CompletedTasks: completedTask
        });
    }
    return (
        <div className={classes.task}>
            <div className={classes.taskDescription}>{props.text}</div>
            <div className={classes.taskControls}>
                <button className={classes.completed}><CheckOutlinedIcon /></button>
                <button className={classes.delete} onClick={deleteHandler}><DeleteIcon /></button>
            </div>
        </div>
    )
}
