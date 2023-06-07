import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
import reportWebVitals from "./reportWebVitals";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const Li = ({children, prop}) => <li>{children} is {prop}</li>;
// const X = () => (
//   <ul>
//     <Li prop={'happy'}>Chanchito</Li>
//     <Li>Sad</Li>
//     <Li>Hungry</Li>
//   </ul>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<X />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
