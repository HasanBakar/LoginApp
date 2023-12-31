/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/Validate";
import styles from "../styles/Username.module.css";

export default function Recovery() {
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container max-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{ width: "50%" }}>
          <div className="title flex flex-col items-center">
            <h3 className="text-5xl font-bold ">Recovery</h3>
            <span className="py-4 text-center w-2/3 text-xl text-gray-500">
              Enter OTP to recover password!
            </span>
          </div>
          <form onSubmit={formik.handleSubmit} className="pt-1">
            <div className="flex flex-col items-center gap-6">
              <span className="py-4 text-sm text-left text-gray-500">
                Enter 6 digits OTP sent to your email address.
              </span>
              <input
                {...formik.getFieldProps("password")}
                className={styles.textbox}
                type="password"
                placeholder="Enter your OTP"
              />
              <button className={styles.btn} type="submit">
                Sign In
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500 mb-2">
                Can&apos;t get OTP
                <button className="pl-2 text-red-500" to="/recovery">
                  Resend
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
