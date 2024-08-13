import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./styles.module.scss";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import router from "next/router";
import ReCAPTCHA from "react-google-recaptcha";

const validationSchema = Yup.object({
  first_name: Yup.string()
    .required("First name is required")
    .matches(/^[A-Za-z]+$/, "Only alphabets are allowed")
    .max(50, "Maximum length is 50 characters"),
  last_name: Yup.string()
    .required("Last name is required")
    .matches(/^[A-Za-z]+$/, "Only alphabets are allowed")
    .max(50, "Maximum length is 50 characters"),
  email: Yup.string()
    .email("Invalid email format")
    .matches(
      /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Email is required")
    .max(100, "Maximum length is 100 characters"),
  phone: Yup.string()
    .matches(
      /^\+\d[\d\s\-\(\)]{6,14}$/,
      'Phone number must start with "+" followed by 7 to 15 characters (digits, spaces, hyphens, or parentheses)'
    )
    .required("Phone number is required")
    .min(7, "Phone number is too short (minimum is 7 characters)")
    .max(15, "Phone number is too long (maximum is 15 characters)"),
  company: Yup.string()
    .required("Company name is required")
    .max(100, "Maximum length is 100 characters"),
  country: Yup.string()
    .required("Country is required")
    .max(100, "Maximum length is 100 characters"),
  description: Yup.string().max(500, "Maximum length is 500 characters"),
  recaptcha: Yup.string().required("Please verify that you are a human."),
});

const ContactBasicDetail = ({ submitted, title, extrafields }) => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleRecaptcha = (value) => {
    setRecaptchaValue(value);
  };

  const handleFormSubmit = async (values, { setSubmitting }) => {
    setSubmitting(false);

    // First form submission
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8";
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

    Object.entries(values).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    // Redirect after form submission
    window.location.href = "/contact/thank-you";

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
    const response = await fetch("/api/sendMail", {
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
          recaptcha: "",
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
            <div className={styles.formGroup}>
              <ReCAPTCHA
                sitekey="6LfJ8yQqAAAAABlOyuVaSKMa4NKtscHapAcriTut"
                onChange={(value) => {
                  handleRecaptcha(value);
                  setFieldValue("recaptcha", value);
                }}
              />
              <ErrorMessage
                name="recaptcha"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.ctaContainer}>
              <div className={styles.back} onClick={() => router.back()}>
                Go back
              </div>
              <button
                type="submit"
                disabled={isSubmitting || !recaptchaValue || !values.first_name || !values.last_name || !values.email || !values.phone || !values.company || !values.country}
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