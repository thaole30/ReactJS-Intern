import React, { useReducer } from 'react';

const initialTodos = [
  {
    id: 'a',
    task: 'drink',
    complete: false,
  },
  {
    id: 'b',
    task: 'sleep',
    complete: false,
  },
  {
    id: 'c',
    task: 'learn',
    complete: false,
  },
]; 

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'DO_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    case 'UNDO_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

const Todos = () => {
  const [todos, dispatch] = useReducer(
    todoReducer,
    initialTodos
  );
  console.log("todos", todos);

  const handleChange = todo => {
    dispatch({
      type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
      id: todo.id,
    });
  };

  return (
    <>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleChange(todo)}
              />
              {todo.task}
            </label>
          </li>
        ))}
      </ul>
      <h3>Task done: 
        {
          todos.filter(todo => todo.complete).length
        }
      </h3>
    </>
  );
};

export default Todos;