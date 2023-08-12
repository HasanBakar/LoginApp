/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import { Toaster } from "react-hot-toast";
import {useState} from "react"
import { useFormik } from "formik";
import { registerValidation } from "../helper/Validate";
import styles from "../styles/Username.module.css";
import convertToBase64 from "../helper/convert"

export default function Register() {

  const [file, setFile] = useState("")

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });
      console.log(values);
    },
  });
  /* formik doesn't support file upload so we need to create this handler */
  const onUpload = async e =>{
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64)
  }

  return (
    <div className="container max-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{ width: "50%" }}>
          <div className="title flex flex-col items-center">
            <h3 className="text-5xl font-bold ">Please Register</h3>
            <span className="text-center w-2/3 text-xl text-gray-500">
              Happy to join you!
            </span>
          </div>
          <form onSubmit={formik.handleSubmit} className="">
            <div className="profile flex items-center justify-center gap-8">
              <label htmlFor="profile">
                <img
                  className={styles.profile_img}
                  src={file || avatar}
                  alt="avatar"
                />
              </label>
              <input
                onChange={onUpload}
                type="file"
                name="profile"
                id="profile"
              />
            </div>
            <div className="flex flex-col items-center">
              <input
                {...formik.getFieldProps("email")}
                className={styles.textbox}
                type="email"
                placeholder="Email*"
              />
              <input
                {...formik.getFieldProps("username")}
                className={styles.textbox}
                type="text"
                placeholder="Username*"
              />
              <input
                {...formik.getFieldProps("password")}
                className={styles.textbox}
                type="password"
                placeholder="password*"
              />
              <button
                className={styles.btn}
                style={{ padding: "2px", margin:"3px" }}
                type="submit"
              >
                register
              </button>
            </div>
            <div className="text-center pb-18 pt-2">
              <span className="text-gray-500 mb-2">
                Already have an account?
                <Link className="pl-2 text-red-500" to="/">
                  please Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
