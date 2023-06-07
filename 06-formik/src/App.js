import { Formik, Form, Field, ErrorMessage } from "formik";
import TextInput from './components/TextInput';

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
    errors.lastName = "El apellid es muy corto";
  }
  return errors;
};
const App = () => {
  return (
    <Formik
      initialValues={{ name: "", lastName: "", email: "" }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <TextInput name="name" label="Name"/>
        {/* <label>Name</label>
        <Field type="text" name="name"/> */}
        {/* <ErrorMessage name="name"/> */}
        <Field as="select" name="select">
          <option value="1a">1a</option>
          <option value="2b">2b</option>
        </Field>
        <br />
        <label>Lastname</label>
        <Field type="text" name="lastName" />
        <ErrorMessage name="lastName"/>
        <br />
        <label>Email</label>
        <Field type="email" name="email" />
        <ErrorMessage name="email"/>
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
};

export default App;
