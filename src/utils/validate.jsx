const validate = (email, password, fullname) =>{
    const isNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(fullname)
    if(fullname != null && !isNameValid)
        return "Please enter a valid name."
    
    const isValidEmail = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
    
    if (!isValidEmail) {
        return "Please enter a valid email address.";
    }
    
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)
    if(!isPasswordValid)
        return "Please enter a valid password."
    
    
    return null
}

export default validate;