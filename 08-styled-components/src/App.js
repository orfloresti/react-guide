import styled from "styled-components";

const P = styled.p`
  font-size: 24px;
  color: red;
`

const Content = styled.div`
  padding: 20px 25px;
`

const Button = styled.button`
  background-color: ${props => props.primary ? 'red' : 'white'};
  color: ${props => props.primary ? 'white' : 'red'};
  padding: 10px 15px;
  border: solid 2px red;
  border-radius: 4px;
`

const App = () => {
  return (
    <Content>
      <P>
        Hello I'm a paragraph 
      </P>

      <Button> Send </Button>
      <Button primary> Send II </Button>
    </Content>
  );
};

export default App;
