import React, {useState} from 'react'
import {doc, updateDoc} from 'firebase/firestore';
import {db} from '../services/firebase.config'


const EditTask = ({task, id}) => {

  console.log(task, id);

  const [updatedTask, setUpdatedTask] = useState([task]);

  const updateTask = async (e) => {
    e.preventDefault();

    try {
      const taskDocument = doc(db, "tasks", id);
      await updateDoc(taskDocument, 
        {
          task: updatedTask,
          isChecked: false
        })
        window.location.reload()
    } catch (err) {
      console.log(err);
    }   
  }


  return (
    <>
    <button type="button" className="btn btn-primary" 
    data-bs-toggle="modal" data-bs-target="#updateTask">
      Update Task
    </button>
            {/* Modal */}
    <div className="modal fade" id="addTask" tabIndex="-1" 
    aria-labelledby="addTaskLabel" aria-hidden="true">
  <div className="modal-dialog">
    <form className="d-flex">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="addTaskLabel">Update Task</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

        
        <input 
        type="text" 
        className="form-control" 
        placeholder="Add a Task" 
        defaultValue={updatedTask}
        onChange={(e) => setUpdatedTask(e.target.value)}
        />
      

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button 
        type="submit" 
        className="btn btn-primary"
        onClick={e => updateTask(e)}
        >Update task</button>
      </div>
    </div>
    </form>
  </div>
</div>
    </>
  )
}

export default EditTask