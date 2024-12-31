import { useId } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import css from '../ContactForm/ContactForm.module.css';
const FormSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').max(50).required('Required'),
  number: Yup.string()
    .matches(/^\d+(-\d+)*$/, 'Number must contain only digits')
    .min(10, 'Too short!')
    .max(15)
    .required('Required'),
});

export default function ContactForm({ handleSubmit }) {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
        id: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      <Form className={css.form}>
        <div className={css.formWrapper}>
          <label className={css.formLabel} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.formField}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage
            name="name"
            component="span"
            style={{ color: 'blue' }}
          />
        </div>
        <div className={css.formWrapper}>
          <label className={css.formLabel} htmlFor={phoneFieldId}>
            Number
          </label>
          <Field
            className={css.formField}
            type="tel"
            name="number"
            id={phoneFieldId}
          />
          <ErrorMessage
            name="number"
            component="span"
            style={{ color: 'blue' }}
          />
        </div>
        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
