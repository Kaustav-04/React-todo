import React from 'react'
import classes from './Layout.module.css'

export default function Layout(props) {
  return (
    <div className={classes.container}>
        <h3 id="header">Todo App</h3>
        <div className={classes.todoBody}>
          {props.children}
        </div>
        </div>
  )
}
