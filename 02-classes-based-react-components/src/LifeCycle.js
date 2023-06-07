import { Component } from "react";

class Button extends Component {
  state = {};

  constructor(props) {
    super(props);
    console.log("constructor", props);
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("Umount component", this.prevProps, this.prevState);
  }

  render() {
    console.log("Exec render method");

    return <button onClick={() => this.setState({ prop: 1 })}>Send</button>;
  }
}
class LifeCycle extends Component {
  state = {
    valor: 3,
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <p>Hola</p>
        {this.state.valor === 3 ? <Button chanchito="Happy" /> : null}
        <button
          className={`${this.state.valor}`}
          onClick={() => this.setState({ valor: 2 })}
        >
          Send in App
        </button>
      </div>
    );
  }
}
export default LifeCycle;
