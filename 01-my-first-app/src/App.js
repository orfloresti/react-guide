import Button from "./Button";

const arr = [
    'Happy',
    'Sad',
    'Hungry'
]

const App = () => {
    const myVariable = false;
    if(myVariable) {
        return <p>My variable is true</p>
    }
    return(
        <div>
            <h1 onClick={(e)=>{console.log('Click', e)}} >Hello world</h1>
            {arr.map( el => <p key={el}>{el}</p> )}
            <Button onClick={()=>{ console.log('click') }}>Enviar</Button>
        </div>
    )
}

export default App;