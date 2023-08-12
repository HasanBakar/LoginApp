/* eslint-disable no-useless-escape */
import toast from "react-hot-toast";

/** validate login page username */
export async function usernameValidate(values) {
    const errors = usernameVerify({}, values);
    return errors;
}

/** validate password page password */
export async function passwordValidate(values) {
    const errors = passwordVerify({}, values);
    return errors;
}

/** Register form validation */

export async function registerValidation(values) {
    const errors = usernameVerify({}, values);
    passwordVerify(errors, values);
    emailVerify(errors, values);

    return errors;
}

/* validate reset password */
export async function resetPasswordValidation(values) {
    const errors = passwordVerify({}, values);

    if(values.password !== values.confirm_pwd){
        errors.exist =toast.error("Password not match.....!")
    }
    return errors;
}


/* Password validation */
function passwordVerify(errors = {}, values) {
    const Regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).{4,}$/;
    if(!values.password){
        errors.password = toast.error("Password Required....!");
    }
    else if(values.password.includes(" ")){
        errors.password = toast.error("Wrong Password....!");
    }
    else if(!Regex.test(values.password)){
        errors.password = toast.error(
          "Password must have a special character, Uppercase letter,Lowercase letter and more than 4 characters..!"
        );
    }
    return errors;
}

/* Username validation */

function usernameVerify(error ={}, values) {
    if(!values?.username){
        error.username = toast.error("Username Required.....!");
    }
    else if(values?.username.includes(" ")){
        error.username = toast.error("Invalid Username....!")
    }
    return error; 
}

/* validate email address*/

function emailVerify(error = {}, values) {
    if(!values.email){
        error.email = toast.error("Email Required....!");

    }else if(values.email.includes(" ")){
        error.email = toast.error("Wrong Email Address....!");
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,4}$/i.test(values.email)){
       error.email = toast.error("Invalid email address.....!"); 
    }

   return error;
}