import React from "react";

const MyComponent = ({myProp}) =>{
  return(
    <div>
      Name: {myProp}
    </div>
  )
}

const App = () => {
  return ( 
    <MyComponent myProp={'Happy'} />
  );
}

export default App;