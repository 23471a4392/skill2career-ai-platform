export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

export function validatePassword(password: string): { isValid: boolean; message?: string } {
  if (!password || password.length < 6) {
    return { isValid: false, message: 'Password must be at least 6 characters long.' };
  }
  return { isValid: true };
}

export function validateRequired(value: string, fieldName: string): { isValid: boolean; message?: string } {
  if (!value || value.trim() === '') {
    return { isValid: false, message: `${fieldName} is required.` };
  }
  return { isValid: true };
}
