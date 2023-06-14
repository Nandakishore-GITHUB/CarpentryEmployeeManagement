import { toast } from "react-hot-toast"


// validate LoginPageUsername

export async function usernameValidate(values){
    const errors = usernameVerify({},values)

    return errors
}

// validate LoginPagePassword
export async function passwordValidate(values){
    const errors = passwordVerify({},values)

    return errors
}

//Validate Registration Page confirm password
export async function confirmPasswordValidate(values){
    const errors = confirmPasswordVerify({}, values)

    return errors
}


// validate Username

function usernameVerify(errors = {}, values){

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

    if(!values.username){
        errors.username = toast.error('Username Required')
    }else if(specialChars.test(values.username)){
        errors.username = toast.error('Invalid Username')
    }

    return errors
}

// validate Password

function passwordVerify(errors = {}, values){


    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

    if(!values.password){
        errors.password = toast.error('Password Required')
    }else if(values.password.includes(" ")){
       errors.password = toast.error('Wrong Password')
    }else if(values.password.length < 4){
       errors.password = toast.error('Strength Low...! More than 4 characters required ')
    }else if(!specialChars.test(values.password)){
        errors.password = toast.error('Password must have special characters')
    }

    return errors
}

// Validate Confirm password

function confirmPasswordVerify(errors = {}, values){


    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

    if(!values.confirmPassword){
        errors.confirmPassword = toast.error('Password Required')
    }else if(values.confirmPassword.includes(" ")){
       errors.confirmPassword = toast.error('Wrong Password')
    }else if(values.confirmPassword.length < 4){
       errors.confirmPassword = toast.error('Strength Low...! More than 4 characters required ')
    }else if(!specialChars.test(values.password)){
        errors.confirmPassword = toast.error('Password must have special characters')
    }else if(values.password != values.confirmPassword){
        errors.confirmPassword = toast.error('The passsword is not same')
    }

    return errors
}

