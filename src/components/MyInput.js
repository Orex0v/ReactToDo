import React, { useState } from 'react';

const MyInput = ({ create }) => {
  const [newToDo, setToDo] = useState({
    text: '',
    date: '',
  });
  function addNewPost(e) {
    e.preventDefault();
    console.log(newToDo);
    newToDo.date = newToDo.id = Date.now();
    create(newToDo);
    setToDo({
      text: '',
      date: '',
    });
  }
  return (
    <div className="pb-2">
      <div className="card">
        <form className="card-body" onSubmit={addNewPost}>
          <div className="d-flex flex-row align-items-center">
            <input
              type="text"
              className="form-control form-control-lg"
              id="exampleFormControlInput1"
              placeholder="Add new..."
              value={newToDo.text}
              onChange={(e) => setToDo({ ...newToDo, text: e.target.value })}
              required
            />
            <a href="#!" data-mdb-toggle="tooltip" title="Set due date">
              <i className="fas fa-calendar-alt fa-lg me-3"></i>
            </a>
            <div>
              <button className="btn btn-primary">Add</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default MyInput;
