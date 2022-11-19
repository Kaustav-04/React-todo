import React, { useRef, useState } from 'react'
import classes from './Pending.module.css'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { taskActions } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { pendingActions } from '../../store';
import { ref, set} from "firebase/database";
import { database } from '../../firebase';

export default function EachPendingTask(props) {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false)
    const [done, setDone] = useState(false)
    const [edittedTask, setEdittedTask] = useState(props.text);
    const pendingTasks = useSelector(state => state.task.pendingTask)
    const completedTask = useSelector(state => state.task.completedTask);

    const completeHandler = () => {
        console.log(props.index);
        setDone(true)
        dispatch(taskActions.taskDone(props.index))
        dispatch(pendingActions.changePendingState(false));
        set(ref(database, '/tasks/'), {
            PendingTasks: pendingTasks,
            CompletedTasks: completedTask
        });
    }
    const enableEdit = () => {
        setEdit(true);
    }
    const closeEdit = () => {
        setEdit(false);
        dispatch(taskActions.updateTask({ id: props.index, data: edittedTask }))
        set(ref(database, '/tasks/'), {
            PendingTasks: pendingTasks,
            CompletedTasks: completedTask
        });
    }
    return (
        <div className={classes.task}>
            <div className={classes.taskDescription}>{!edit && <div className={classes.taskText}>{props.text}</div>}{edit && <input type="text" className={classes.editInput} value={edittedTask} ref={inputRef} onChange={() => setEdittedTask(inputRef.current.value)} />}{edit && <button className={classes.saveEdit} onClick={closeEdit}>Save</button>}</div>
            {!edit && <div className={classes.taskControls}>
                <button className={classes.edit} onClick={completeHandler} style={{ color: done ? 'green' : 'red' }}><CheckOutlinedIcon /></button>
                <button className={classes.complete} onClick={enableEdit}><EditOutlinedIcon /></button>
            </div>}
        </div>)
}
