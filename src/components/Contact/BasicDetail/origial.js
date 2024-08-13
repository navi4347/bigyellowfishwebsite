import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./styles.module.scss";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import router from "next/router"; // correct way

const validationSchema = Yup.object({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(
      /^[0-9+]+$/,
      'Phone number can only contain digits and the "+" sign'
    )
    .required("Phone number is required"),
  company: Yup.string().required("Company name is required"),
  country: Yup.string().required("Country is required"),
  description: Yup.string(),
});

const ContactBasicDetail = ({ submitted, title, extrafields }) => {
  const [isDebug, setIsDebug] = useState(false);

  const handleFormSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);

    // First form submission
    const form = document.createElement("form");
    form.method = "POST";
    form.action =
      "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8";
    const hiddenFields = {
      oid: "00DHr000004C8XJ",
      retURL: window.location.origin + "/contact/thank-you",
    };

    Object.entries(hiddenFields).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    if (isDebug) {
      const debugFields = {
        debug: "1",
        debugEmail: "astin.johnson@bigyellowfish.io",
      };
      Object.entries(debugFields).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });
    }

    Object.entries(values).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    // Second action: Custom email trigger
    const track_utm = {};
    const keys = JSON.parse(localStorage.getItem("keys")) || [];
    keys.forEach((element) => {
      track_utm[element] = localStorage.getItem(element);
    });

    const str = new URLSearchParams({
      ...values,
      ...track_utm,
    }).toString();
    console.log(str);
    const response = fetch("/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: str,
    });
  };

  return (
    <div className={styles.formWrapper}>
      <h1 className={styles.heading}>
        {title ? title : "Contact us for details"}
      </h1>
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          company: "",
          country: "",
          description: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label htmlFor="first_name">First Name*</label>
                <Field type="text" name="first_name" placeholder="First Name" />
                <ErrorMessage
                  name="first_name"
                  component="div"
                  className={styles.error}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="last_name">Last Name*</label>
                <Field type="text" name="last_name" placeholder="Last Name" />
                <ErrorMessage
                  name="last_name"
                  component="div"
                  className={styles.error}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email ID*</label>
                <Field type="email" name="email" placeholder="Your email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.error}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone no.*</label>
                <div className={styles.phoneContainer}>
                  <PhoneInput
                    international
                    defaultCountry="SG"
                    value={values.phone}
                    placeholder="Enter phone number"
                    onChange={(value) => setFieldValue("phone", value)}
                  />
                </div>
                <ErrorMessage
                  name="phone"
                  component="div"
                  className={styles.error}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label htmlFor="company">Company*</label>
                <Field type="text" name="company" placeholder="Company" />
                <ErrorMessage
                  name="company"
                  component="div"
                  className={styles.error}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="country">Country*</label>
                <Field type="text" name="country" placeholder="Country" />
                <ErrorMessage
                  name="country"
                  component="div"
                  className={styles.error}
                />
              </div>
            </div>
            {extrafields && (
              <div className={styles.formGroup}>
                <label htmlFor="description">Additional Details</label>
                <textarea
                  name="description"
                  rows={4}
                  onChange={(e) => {
                    setFieldValue("description", e.target.value);
                  }}
                  placeholder={"Please type your note here ..."}
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className={styles.error}
                />
              </div>
            )}
            <div className={styles.ctaContainer}>
              <div className={styles.back} onClick={() => router.back()}>
                Go back
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.cta}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactBasicDetail;
