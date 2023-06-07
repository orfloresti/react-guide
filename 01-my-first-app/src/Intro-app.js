// import logo from './logo.svg';
// import './App.css';
import './main.css';

const style2 = {
  boxShadow: '0 5px 3px rgba(0,0,0,0.5)'
}

const style1 = ({bg = '#222'}) => ({
  backgroundColor: bg,
  color: '#555',
  padding: '10px 15px',
  margin: '10px 15px'
})

const Li = ({children})=> {
  return (
    <li className='class-li'>{children}</li>
  )
}

const App = () => {
  const value = 'Sad'
  return (
    <ul style={style1({bg: '#ccc'})}>
      <Li className='class-css'>Chanchito is {value}</Li>
    </ul>
  );
}

export default App;
