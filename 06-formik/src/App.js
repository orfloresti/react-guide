import { Formik, Form, ErrorMessage } from "formik";
import TextInput from "./components/TextInput";
import Checkbox from "./components/Checkbox";
import Select from "./components/Select";
import Radio from "./components/Radio";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 5) {
    errors.name = "El nombre es muy corto";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length < 5) {
    errors.lastName = "El apellido es muy corto";
  }

  if (!values.radio) {
    errors.radio = "Required";
  }

  return errors;
};
const App = () => {
  return (
    <Formik
      initialValues={{ name: "", lastName: "", email: "", radio: "" }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <TextInput name="name" label="Name" />
        <br />
        <TextInput name="lastName" label="Last name" />
        <br />
        <TextInput name="email" label="Email" />
        <br />

        <Select label="Type" name="a">
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
        </Select>

        <br />
        <Checkbox name="accept">Accept</Checkbox>
        <br />
        <Radio name="radio" value="A" label="A" />
        <Radio name="radio" value="B" label="B" />
        <Radio name="radio" value="C" label="C" />
        <ErrorMessage name="radio" />
        <br />

        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
};

export default App;
