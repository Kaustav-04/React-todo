import React, { Fragment } from 'react'
import EachPendingTask from './EachPendingTask';
import { useSelector } from 'react-redux';
// const pendingTasks = ['Hello','Kaustav'];

export default function Pending() {
  const pendingTasks = useSelector(state => state.task.pendingTask)
  if (pendingTasks.length === 0 || !pendingTasks) {
    return (
      <Fragment>
        <div id="nullPending">No pending tasks left!</div>
        <div className="null">Add Tasks</div>
      </Fragment>
    )
  }
  return (
    pendingTasks.map((i, index) => <EachPendingTask index={index} text={i} />
    )
  )
}
