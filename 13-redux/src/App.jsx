import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shape, bool, string } from "prop-types";
import { fetchThunk, selectStatus, selectTodos, setComplete, setFilter } from "./features/todos";

// const initialState = {
//   entities: [],
//   filter: "all", // complete || incomplete
// };

// export const reducer = (state = initialState, action) => {
//   return {
//     entities: todosReducer(state.entities, action),
//     filter: filterReducer(state.filter, action),
//   };
// };

// export const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "todo/add": {
//       return {
//         ...state,
//         entities: state.entities.concat({ ...action.payload }),
//       };
//     }
//     case "todo/complete": {
//       const newTodos = state.entities.map((todo) => {
//         if (todo.id === action.payload.id) {
//           return { ...todo, completed: !todo.completed };
//         }
//         return todo;
//       });
//       return {
//         ...state,
//         entities: newTodos,
//       };
//     }
//     case "filter/set": {
//       return {
//         ...state,
//         filter: action.payload,
//       }
//     }
//     default:
//       return state;
//   }
// };

const TodoItem = ({ todo }) => {
  const dispath = useDispatch();
  return (
    <li
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      onClick={() => dispath(setComplete(todo))}
    >
      {todo.title}
    </li>
  );
};

TodoItem.propTypes = {
  todo: shape({
    completed: bool,
    title: string,
  }),
};

function App() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const status = useSelector(selectStatus);


  const submit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      return;
    }

    const id = Math.random().toString();
    const todo = { title: value, completed: false, id };
    dispatch({ type: "todo/add", payload: todo });
    setValue("");
  };

  if(status.loading === 'pending') {
    return <p>Cargando...</p>
  }

  if(status.loading === 'rejected') {
    return <p>{status.error}</p>
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      </form>
      <button onClick={() => dispatch(setFilter('all'))}>
        Mostrar todos
      </button>
      <button
        onClick={() => dispatch(setFilter("complete"))}
      >
        Completados
      </button>
      <button
        onClick={() => dispatch(setFilter("incomplete"))}
      >
        Incompletos
      </button>
      <button
        onClick={()=> dispatch(fetchThunk()) }
      > Fetch </button>

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
