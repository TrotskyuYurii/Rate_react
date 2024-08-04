import { useId } from "react";
import { Formik, Form, Field } from 'formik';
import css from './contactform.module.css'

const initialValues = {
    username: "",
    email: "",
  };
  
  const Contactform = () => {
    const nameFieldId = useId();
    const textFieldId2 = useId();
  
    const handleSubmit = (values, actions) => {
      console.log(values);
      actions.resetForm();
    };
  
    return (
      <Formik  initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.contactMainform}>
          {/* <label htmlFor={nameFieldId}>Username</label> */}
          <Field type="text" name="username" id={nameFieldId} placeholder="Enter your username" required/>
  
          {/* <label htmlFor={emailFieldId}>Email</label> */}
          <Field type="text" name="comment" id={textFieldId2} placeholder="Enter your comment" required/>
  
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
  };

export default Contactform