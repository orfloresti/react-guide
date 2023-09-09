import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shape, bool, string } from "prop-types";
import { combineReducers } from 'redux'

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

export const asyncMiddleware = store => next => action => {
  if(typeof action==='function') {
    return action(store.dispatch, store.getState)
  }
  // console.log(store, next, action);
  return next(action);
}

export const fetchThunk = () => dispatch => {
  console.log('Soy un thunk', dispatch);
}


export const filterReducer = (state = "all", action) => {
  switch (action.type) {
    case "filter/set":
      return action.payload;
    default:
      return state;
  }
};

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "todo/add":
      return state.concat({ ...action.payload });
    case "todo/complete": {
      const newTodos = state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return newTodos;
    }
    default:
      return state
  }
};

export const reducer = combineReducers({
  entities: todosReducer,
  filter: filterReducer,
})

const selectTodos = (state) => {
  const { entities, filter } = state;

  if (filter === "complete") {
    return entities.filter((todo) => todo.completed);
  }
  if (filter === "incomplete") {
    return entities.filter((todo) => !todo.completed);
  }

  return entities;
};

const TodoItem = ({ todo }) => {
  const dispath = useDispatch();
  return (
    <li
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      onClick={() => dispath({ type: "todo/complete", payload: todo })}
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
  return (
    <div>
      <form onSubmit={submit}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      </form>
      <button onClick={() => dispatch({ type: "filter/set", payload: "all" })}>
        Mostrar todos
      </button>
      <button
        onClick={() => dispatch({ type: "filter/set", payload: "complete" })}
      >
        Completados
      </button>
      <button
        onClick={() => dispatch({ type: "filter/set", payload: "incomplete" })}
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
