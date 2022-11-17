import React, { Fragment } from 'react'
import EachCompletedTask from './EachCompletedTask'
import { useSelector } from 'react-redux';

export default function Completed() {
  const completedTask = useSelector(state => state.task.completedTask);
  if (completedTask.length === 0) {
    return (
      <Fragment>
        <div id="nullCompleted">All tasks are pending</div>
        <div className="null">Complete Tasks</div>
      </Fragment>
    )
  }
  return (
    completedTask.map((i, index) => <EachCompletedTask index={index} text={i} />)
  )
}
