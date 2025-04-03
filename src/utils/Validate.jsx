export const validateData = (email, password, number = "", name = "") => {
  // Validate name first in Sign Up form
  if (name !== "") {
    const isNameValid = /^[\p{L}\s.'-]+$/u.test(name);
    if (!isNameValid) return "Name is not valid";
  }

  // Validate email
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  if (!isEmailValid) return "Email is not valid";

  // Validate password
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
  if (!isPasswordValid) return "Password is not valid";

  // Validate number in Sign Up form
  if (number !== "") {
    const isNumberValid = /^[1-9]\d*(\.\d+)?$/.test(number.toString().trim());
    if (!isNumberValid) return "Number is not valid";
  }

  return null; // If everything is valid, return null
};
