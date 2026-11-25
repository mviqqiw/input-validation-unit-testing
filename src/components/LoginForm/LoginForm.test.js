
import { render, screen } from '@testing-library/react';
import LoginForm from './index';

import {
  validateEmail,
  validatePassword,
  validateForm,
} from '../../utils/validation';

// Test existing login page
test('renders sign in page', () => {
  render(<LoginForm />);
  expect(screen.getByText('Sign in')).toBeInTheDocument();
});

// Email validation tests
describe('Email validation', () => {
  test('accepts a valid email', () => {
    expect(validateEmail('viqqi@gmail.com')).toBe(true);
  });

  test('rejects an invalid email', () => {
    expect(validateEmail('viqqi123')).toBe(false);
  });
});

// Password validation tests
describe('Password validation', () => {
  test('accepts a valid password', () => {
    const result = validatePassword('Password123!');
    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  test('rejects password shorter than 8 characters', () => {
    const result = validatePassword('Pa1!');
    expect(result.errors).toContain(
      'Password must contain at least 8 characters.'
    );
  });

  test('requires an uppercase letter', () => {
    const result = validatePassword('password123!');
    expect(result.errors).toContain(
      'Password must contain at least one uppercase letter.'
    );
  });

  test('requires a lowercase letter', () => {
    const result = validatePassword('PASSWORD123!');
    expect(result.errors).toContain(
      'Password must contain at least one lowercase letter.'
    );
  });

  test('requires a numerical digit', () => {
    const result = validatePassword('Password!!!');
    expect(result.errors).toContain(
      'Password must contain at least one number.'
    );
  });

  test('requires a special character', () => {
    const result = validatePassword('Password123');
    expect(result.errors).toContain(
      'Password must contain at least one special character.'
    );
  });
});

// Complete form validation tests
describe('Complete form validation', () => {
  test('accepts valid email and password', () => {
    const result = validateForm(
      'viqqi@gmail.com',
      'Password123!'
    );

    expect(result.isValid).toBe(true);
  });

  test('rejects invalid email and password', () => {
    const result = validateForm(
      'viqqi123',
      'password'
    );

    expect(result.isValid).toBe(false);
    expect(result.emailValid).toBe(false);
    expect(result.passwordValid).toBe(false);
  });
});
