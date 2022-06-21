import React, { useState } from 'react';
import './App.css';
import MyFilter from './components/MyFilter';
import MyInput from './components/MyInput';
import ToDoItem from './components/ToDoItem';
import { useSortedToDos } from './hooks/UseToDos';
function App() {
  const [toDoItems, setToDoItem] = useState([
    {
      id: 1,
      text: 'Тестовый текст',
      complite: false,
      date: Date.now(),
    },
    {
      id: 2,
      text: 'Тестовый текст',
      complite: false,
      date: Date.now(),
    },
    {
      id: 3,
      text: 'Тестовый текст',
      complite: true,
      date: Date.now(),
    },
    {
      id: 4,
      text: 'Тестовый текст',
      complite: false,
      date: Date.now(),
    },
  ]);
  const [filter, setFilter] = useState({
    sort: '',
    query: '',
  });
  function compliteToDo(id) {
    let x = toDoItems.map((i) => {
      if (i.id === id) {
        i.complite = !i.complite;
      }
      return i;
    });
    setToDoItem(x);
  }
  function addToDo(toDo) {
    setToDoItem([...toDoItems, toDo]);
  }
  const sortedAndSeatchedToDos = useSortedToDos(toDoItems, filter.sort);
  console.log('sortedAndSeatchedToDos: ', sortedAndSeatchedToDos);
  return (
    <div className="App">
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card" id="list1">
                <div className="card-body py-4 px-4 px-md-5">
                  <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                    <i className="fas fa-check-square me-1"></i>
                    <u>My Todo-s</u>
                  </p>

                  <MyInput create={addToDo} />

                  <hr className="my-4" />

                  <MyFilter filter={filter} setFilter={setFilter} />
                  {sortedAndSeatchedToDos.map((todo) => (
                    <ToDoItem
                      text={todo.text}
                      complite={todo.complite}
                      date={todo.date}
                      compliteToDo={compliteToDo}
                      id={todo.id}
                      key={todo.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
