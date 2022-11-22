import React, { useRef, useState } from 'react'
import classes from './NewTodo.module.css'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { taskActions } from '../../store';
import { pendingActions } from '../../store';
import { ref, set } from "firebase/database";
import { database } from '../../firebase';

export default function NewTodo() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch();
  const inputRef = useRef();
  const pendingTasks = useSelector(state => state.task.pendingTask)
  const completedTask = useSelector(state => state.task.completedTask);

  const addNewTodo = () => {
    dispatch(taskActions.addTask(value));
    dispatch(pendingActions.changePendingState(true))
    setValue('')
    set(ref(database, '/tasks/'), {
      PendingTasks: pendingTasks,
      CompletedTasks: completedTask
    });

  }
  return (
    <div className={classes.addTodoSection}>
      <input type="text" name="newTodo" className={classes.newTodoTxt} value={value} ref={inputRef} onChange={() => setValue(inputRef.current.value)} placeholder="Add your new Todo" />
      <button className={classes.addNewTodoBtn} onClick={addNewTodo}><AddOutlinedIcon /></button>
    </div>
  )
}
