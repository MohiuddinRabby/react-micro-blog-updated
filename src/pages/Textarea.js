import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import { ColorContext } from "../global/ColorContext";
import { MainContentContext } from "../global/MainContentContext";
import { v4 as uuidv4 } from "uuid";
const initialValues = {
  postText: "",
};
const Textarea = () => {
  const { selectedColor } = useContext(ColorContext);
  const { dispatch } = useContext(MainContentContext);
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          let allowed = values.postText.length;
          if (allowed > 0 && allowed <= 100) {
            dispatch({
              type: "ADD_CONTENT",
              payload: {
                id: uuidv4(),
                body: values.postText,
              },
            });
            resetForm();
          } else {
            alert("letters should not more than 100");
          }
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
                  required
                />
              </div>
              <div className="text-center">
                <p
                  style={{
                    color: `${
                      values.postText.length > 100 ? `red` : `${selectedColor}`
                    }`,
                    fontWeight: "bold",
                  }}
                >{`${100 - values.postText.length} ${
                  values.postText.length > 100 ? `words exceeded` : `words left`
                }`}</p>
                <p></p>
                <button
                  type="submit"
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
