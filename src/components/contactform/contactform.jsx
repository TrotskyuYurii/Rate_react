import { useId } from "react";
import { Formik, Form, Field } from 'formik';
import iziToast from 'izitoast';

import "izitoast/dist/css/iziToast.min.css";
import css from './contactform.module.css'

const initialValues = {
    username: "",
    comment: "",
  };
  
  const Contactform = () => {

    const nameFieldId = useId();
    const textFieldId2 = useId();
  
    const handleSubmit = (values, actions) => { 

      const currentRating = Number(window.localStorage.getItem("currentRating"));

      if (!currentRating) {
        iziToast.error({ title: 'Помилка!', message: 'Ви не вибрали рейтинг', position: 'topRight' });
        // alert("Ви не вибрали рейтинг");
        return;
      }

      const objToRecord = {
        username: values.username,
        comment: values.comment,
        rating: currentRating,
      }
      iziToast.success({ title: 'Успішно!', message: 'Ваше повідомлення відправлено', position: 'topRight' });

      
      window.localStorage.removeItem("currentRating");
      actions.resetForm();
    };
  
    return (
      <Formik  initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.contactMainform}>
          <Field className={css.contactField} type="text" name="username" id={nameFieldId} placeholder="Введіть своє ім'я" required/>
          <Field className={css.contactField} type="text" name="comment" id={textFieldId2} placeholder="Введіть своє повідомлення" required/>
          <button type="submit">Відправити</button>
        </Form>
      </Formik>
    );
  };

export default Contactform