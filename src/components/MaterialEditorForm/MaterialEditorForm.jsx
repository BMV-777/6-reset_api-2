import { Formik, Form, Field } from 'formik';

export const MaterialEditorForm = ({ onSubmit }) => {
  const handlerSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ titel: '', link: '' }} onSubmit={handlerSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <label>
            Описание
            <Field name="titel" />
          </label>
          <br />
          <label>
            Ссылки
            <Field name="link" type="text" />
          </label>
          <br />
          <button type="submit" disabled={isSubmitting}>
            Добавить материал
          </button>
        </Form>
      )}
    </Formik>
  );
};
