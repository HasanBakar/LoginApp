/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import {Toaster} from "react-hot-toast";
import {useFormik} from "formik"
import {usernameValidate} from "../helper/Validate"
import styles from "../styles/Username.module.css"


export default function Username() {
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validate: usernameValidate,
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
            <h3 className="text-5xl font-bold ">Hello again</h3>
            <span className="py-4 text-center w-2/3 text-xl text-gray-500">
              Explore more connecting with us
            </span>
          </div>
          <form onSubmit={formik.handleSubmit} className="py-1">
            <div className="profile flex justify-center py-4">
              <img className={styles.profile_img} src={avatar} alt="avatar" />
            </div>
            <div className="flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("username")}
                className={styles.textbox}
                type="text"
                placeholder="Username"
              />
              <button className={styles.btn} type="submit">
                Let&apos;s Go
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500 mb-2">
                Not a Member
                <Link className="pl-2 text-red-500" to="/register">
                  Register Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
