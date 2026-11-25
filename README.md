
# Email & Password Input Validation

A React-based sign-in form featuring email and password validation with unit testing using Jest and React Testing Library.

## Project Overview

This project implements client-side input validation to ensure that users enter a correctly formatted email address and a password that meets the required security criteria.

## Features

- Email validation using email-validator.
- Password validation with multiple security requirements.
- Real-time error feedback using Material UI TextField.
- Success notification using Material UI Snackbar.
- Unit testing with Jest and React Testing Library.

## Password Requirements

Passwords must meet all of the following conditions:

1. Minimum of 8 characters.
2. At least one uppercase letter.
3. At least one lowercase letter.
4. At least one numerical digit (0-9).
5. At least one special character.

## Tech Stack

- React.js
- JavaScript
- Material UI
- email-validator
- Jest
- React Testing Library

## Installation

Clone the repository:

```bash
git clone https://github.com/mviqqiw/input-validation-unit-testing.git
```

Navigate to the project directory:

```bash
cd input-validation-unit-testing
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

## Running Tests

Run the unit tests:

```bash
npm test -- --watchAll=false
```

## Test Results

The project includes 11 unit tests covering:

- Sign-in page rendering.
- Valid and invalid email addresses.
- Minimum password length.
- Uppercase and lowercase letters.
- Numerical digits.
- Special characters.
- Complete form validation.

All 11 tests passed successfully.

## Scope

This project focuses on client-side input validation. It does not include server-side authentication, database verification, or account login functionality.

## Author

GitHub: https://github.com/mviqqiw
