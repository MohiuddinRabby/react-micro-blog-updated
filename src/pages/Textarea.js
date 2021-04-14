import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import { ColorContext } from "../global/ColorContext";
const initialValues = {
  postText: "",
};
const Textarea = () => {
  const { selectedColor } = useContext(ColorContext);
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(`values`, values);
          resetForm();
        }}
      >
        {({ values, setFieldValue, isValid }) => (
          <>
            <Form>
              <div className="container text-center">
                <div className="profile">
                  <img
                    alt="profile-img"
                    style={{ borderColor: selectedColor }}
                    src="https://placeimg.com/40/40/people"
                  />
                </div>
                <Field
                  component="textarea"
                  style={{ borderColor: selectedColor }}
                  rows="4"
                  className="text-input"
                  placeholder="Write Something"
                  name="postText"
                />
              </div>
              <div className="text-center">
                <button
                  className="btn"
                  style={{
                    backgroundColor: selectedColor,
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  Post
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default Textarea;
