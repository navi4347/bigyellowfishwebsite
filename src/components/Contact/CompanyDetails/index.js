import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./styles.module.scss";

const validationSchema = Yup.object({
  companySize: Yup.string().required("Company size is required"),
  industryType: Yup.string().required("Industry type is required"),
  mainProblem: Yup.string().required("Main problem is required"),
  improveProductivity: Yup.string().required(
    "Improve productivity is required",
  ),
});

const ContactCompanyDetail = ({ submitted }) => {
  return (
    <div className={styles.formWrapper}>
      <Formik
        initialValues={{
          companySize: "",
          industryType: "",
          mainProblem: "",
          improveProductivity: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          submitted();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={styles.formGroup}>
              <label htmlFor="companySize">Company Size</label>
              <Field
                type="text"
                name="companySize"
                placeholder="Company size"
              />
              <ErrorMessage
                name="companySize"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="industryType">Industry Type</label>
              <Field as="select" name="industryType">
                <option value="">Select industry type</option>
                <option value="technology">Technology</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                {/* Add more options as needed */}
              </Field>
              <ErrorMessage
                name="industryType"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="mainProblem">Main Problem Facing</label>
              <Field as="select" name="mainProblem">
                <option value="">Select main problem</option>
                <option value="productivity">Productivity</option>
                <option value="cost">Cost</option>
                <option value="quality">Quality</option>
                <option value="other">Other</option>
                {/* Add more options as needed */}
              </Field>
              <ErrorMessage
                name="mainProblem"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="improveProductivity">
                How to Improve Productivity?
              </label>
              <Field as="select" name="improveProductivity">
                <option value="">Select main problem</option>
                <option value="productivity">Productivity</option>
                <option value="cost">Cost</option>
                <option value="quality">Quality</option>
                <option value="other">Other</option>
              </Field>

              <ErrorMessage
                name="improveProductivity"
                component="div"
                className={styles.error}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.cta}
            >
              Next
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactCompanyDetail;
