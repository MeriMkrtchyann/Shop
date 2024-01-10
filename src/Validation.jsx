

const isValidUserName = (userName) => {
    return userName.length >= 3 && userName.length <= 15
}

const isValidUserEmail = (userEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(userEmail)
}

const isValidPassword = (password) =>{
    return password.length > 6 && /[A-Z]/.test(password) && /\d/.test(password) && /[a-z]/.test(password)
}


export {isValidUserName, isValidUserEmail, isValidPassword}