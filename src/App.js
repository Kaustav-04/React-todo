import './App.css'
import NewTodo from './Components/NewTodo/NewTodo';
import Pending from './Components/Pending/Pending';
import Completed from './Components/Competed/Completed';
import Layout from './Components/UI/Layout';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { pendingActions, taskActions } from './store'
import { ref, set, child, get} from "firebase/database";
import { useEffect } from 'react';
import { database } from './firebase';

function App() {
  const dispatch = useDispatch();
  const isPending = useSelector(state => state.pendingStatus.pendingStatus)
  const pendingTasks = useSelector(state => state.task.pendingTask)
  const completedTask = useSelector(state => state.task.completedTask);
  const changeStateHandler = () => {
    dispatch(pendingActions.changePendingState(!isPending))
  }
  const clearAllHandler = () => {
    dispatch(taskActions.clearAll())
  }

  useEffect(() => {
    get(child(ref(database), `/tasks`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val())
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }, [dispatch])

  useEffect(() => {
    set(ref(database, '/tasks/'), {
      PendingTasks: pendingTasks,
      CompletedTasks: completedTask
    });
  }, [pendingTasks,completedTask])

  return (
    <main>
      <Layout>
        <NewTodo />
        <div id="todoVeiwSection">
          <div id="taskHeadingSection">
            <h4 id="pendingHeading" onClick={changeStateHandler} className={isPending ? "show" : ''}>Pending</h4>
            <h4 id="completedHeading" onClick={changeStateHandler} className={!isPending ? "show" : ''}>Completed</h4>
          </div>
          <div id="taskListSection">
            {isPending && <div id="todoPending" className="taskList active">
              <Pending />
            </div>}
            {!isPending && <div id="todoCompleted" className="taskList active">
              <Completed />
            </div>}
          </div>
        </div>
        <div className='todoCount'>
          <div className='counttxt'>{isPending ? `There are ${pendingTasks.length} tasks pending!` : `${completedTask.length} tasks are completed out of ${completedTask.length + pendingTasks.length}`}</div>
          <button className='clearAll' style={{ "display": "block" }} onClick={clearAllHandler}>Clear All</button>
        </div>
      </Layout>
    </main>
  );
}
export default App;
