import Card from "./components/Card";
import Container from "./components/Container";
import UserForm from "./components/UserForm";
import { useState } from "react";

const App = () => {

  const [users, setUsers] = useState([]);
  
  const submit = user => {
    setUsers([...users, user]);
  };

  return (
    <div style={{ marginTop: "15%" }}>
      <Container>
        <Card>
          <div style={{ padding: "20px" }}>
            <UserForm submit={submit} />
          </div>
        </Card>
        <Card>
          <ul>
            {users.map((user) => {
              return (
                <li key={user.email}>
                  {`${user.name} ${user.lastName} ${user.email}`}
                </li>
              );
            })}
          </ul>
        </Card>
      </Container>
    </div>
  );
};

export default App;
