import style from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup"; 
import { addContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Shart!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Shart!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId(); 
  const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {         
    // dispatch ( addContact ({       
    //   name: values.name,
    //   number: values.number,
    // }) )    
    dispatch(addContact(values));  
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={ initialValues }
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={style.form}>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={style.title}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage name="name" as="span" />
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={style.title}
            type="text"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage name="number" as="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
