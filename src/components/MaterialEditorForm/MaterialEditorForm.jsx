import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';

const Input = styled(Field)`
  font-size: 40px;
`;

export const MaterialEditorForm = ({ onSubmit }) => {
  const handlerSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ tittle: '', link: '' }} onSubmit={handlerSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <label>
            Описание
            <Input name="tittle" />
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
