import { useState } from 'react';
import { useId } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';

const FeedbackSchema = Yup.object().shape({
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
      validationSchema={FeedbackSchema}
    >
      <Form>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="span" style={{ color: 'red' }} />
        </div>
        <div>
          <label htmlFor={phoneFieldId}>Number</label>
          <Field type="tel" name="number" id={phoneFieldId} />
          <ErrorMessage
            name="number"
            component="span"
            style={{ color: 'red' }}
          />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
