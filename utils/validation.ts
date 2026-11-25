/**
 * Validation utilities for VETECHI
 */

/**
 * Validates WhatsApp URL format
 * @param url - WhatsApp URL to validate
 * @returns true if valid WhatsApp URL
 */
export const isValidWhatsAppUrl = (url: string): boolean => {
  if (!url || typeof url !== 'string') return false;
  return /^https:\/\/wa\.me\/\d+/.test(url.trim());
};

/**
 * Validates phone number format (simple)
 * @param phone - Phone number to validate
 * @returns true if valid phone number
 */
export const isValidPhoneNumber = (phone: string): boolean => {
  if (!phone) return false;
  return /^[\d\s\-\+\(\)]{7,}$/.test(phone.replace(/\s+/g, ''));
};

/**
 * Validates email format
 * @param email - Email to validate
 * @returns true if valid email
 */
export const isValidEmail = (email: string): boolean => {
  if (!email) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

/**
 * Sanitizes text for WhatsApp URL encoding
 * @param text - Text to sanitize
 * @returns Sanitized text
 */
export const sanitizeWhatsAppText = (text: string): string => {
  if (!text) return '';
  return text
    .trim()
    .replace(/[<>]/g, '')
    .substring(0, 1000);
};

/**
 * Validates form data for contact submission
 */
export const validateContactForm = (formData: {
  name?: string;
  phone?: string;
  petName?: string;
  species?: string;
  reason?: string;
}): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!formData.name?.trim()) {
    errors.push('Name is required');
  }

  if (!formData.phone?.trim()) {
    errors.push('Phone is required');
  } else if (!isValidPhoneNumber(formData.phone)) {
    errors.push('Invalid phone number');
  }

  if (!formData.petName?.trim()) {
    errors.push('Pet name is required');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
