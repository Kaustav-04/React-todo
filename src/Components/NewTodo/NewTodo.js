import React,{useRef, useState} from 'react'
import classes from './NewTodo.module.css'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useDispatch } from 'react-redux';
import { taskActions } from '../../store';
import { pendingActions } from '../../store';

export default function NewTodo() {
  const [value,setValue] = useState('')
  const dispatch = useDispatch();
  const inputRef = useRef();

  const addNewTodo = () =>{
    dispatch(taskActions.addTask(value));
    dispatch(pendingActions.changePendingState(true))
    setValue('')
  }
  return (
    <div className={classes.addTodoSection}>
      <input type="text" name="newTodo" className={classes.newTodoTxt} value={value} ref={inputRef} onChange={()=>setValue(inputRef.current.value)} placeholder="Add your new Todo" />
      <button className={classes.addNewTodoBtn} onClick={addNewTodo}><AddOutlinedIcon /></button>
    </div>
  )
}
