import React from "react";
import { useFormikContext, withFormik, Form, Field } from "formik";

const FormikPage: React.FC = () => {
  const { values, errors, touched } = useFormikContext<any>();

  return (
    <div>
      <p>Formik Pages</p>
      <p>แบบสอบถาม KFC ไก่ทอดอร่อยไหม</p>
      <Form>
        <p style={{ margin: "0" }}>
          ชื่อ <span>{touched?.name && errors?.name && errors.name}</span>
        </p>
        <Field
          name="name"
          type="text"
          placeholder="ชื่อ"
          style={{
            ...(touched?.name && errors?.name && { border: "1px solid red" }),
          }}
        />

        <p style={{ margin: "0" }}>คะแนน</p>
        <Field
          name="star"
          type="number"
          placeholder="คะแนน"
          style={{
            ...(touched?.star && errors?.star && { border: "1px solid red" }),
          }}
        />
        <button type="submit">
          submit
        </button>
      </Form>
    </div>
  );
};

const EnhancedFormikPage = withFormik({
  mapPropsToValues: () => ({
    name: "",
    star: 0, // 0-5
  }),
  validate: (values: any) => {
    const errors: any = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.star) {
      errors.star = "Required";
    }
    return errors;
  },
  handleSubmit: (values: any) => {
    console.log("handleSubmit", values);
  },
})(FormikPage);

export default EnhancedFormikPage;
