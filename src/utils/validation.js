
import emailValidator from 'email-validator';

// Validate email address
export const validateEmail = (email) => {
  return emailValidator.validate(email);
};

// Validate password requirements
export const validatePassword = (password) => {
  const errors = [];

  if (password.length < 8) {
    errors.push('Password must contain at least 8 characters.');
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter.');
  }

  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter.');
  }

  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number.');
  }

  if (!/[^A-Za-z0-9\s]/.test(password)) {
    errors.push('Password must contain at least one special character.');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

// Validate the complete form
export const validateForm = (email, password) => {
  const emailValid = validateEmail(email);
  const passwordResult = validatePassword(password);

  return {
    isValid: emailValid && passwordResult.isValid,
    emailValid,
    passwordValid: passwordResult.isValid,
    passwordErrors: passwordResult.errors,
  };
};
