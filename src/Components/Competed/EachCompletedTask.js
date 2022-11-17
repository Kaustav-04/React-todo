import React from 'react'
import classes from './Completed.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { taskActions } from '../../store';
import { useDispatch } from 'react-redux';

export default function EachCompletedTask(props) {
    const dispatch = useDispatch();
    const deleteHandler = () => {
        dispatch(taskActions.deleteTask(props.index))
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
