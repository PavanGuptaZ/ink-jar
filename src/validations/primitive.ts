import { z } from 'zod'

export const primitiveSchema = {
  userName: z
    .string({
      required_error: 'Username is required',
      message: 'Username must is required',
    })
    .min(3, 'Must be at least 3 characters long')
    .max(20, 'Must be at most 20 characters long')
    .regex(/^[a-zA-Z0-9_]+$/, 'Only letters, numbers, and underscores are allowed'),

  password: z
    .string({
      required_error: 'Password is required',
      message: 'Password must is required',
    })
    .min(8, 'Must be at least 8 characters long')
    .max(20, 'Must be at most 20 characters long')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    ),

  phoneNumber: z
    .string({
      required_error: 'Phone number is required',
    })
    .refine((val) => /^\d+$/.test(val), {
      message: 'Phone number must contain digits only',
    })
    .refine((val) => val.length === 10 || val.length === 11, {
      message: 'Phone number must be 10 or 11 digits long',
    })
    .refine((val) => val.length === 10 || val.startsWith('0'), {
      message: 'If phone number is 11 digits, it must start with 0',
    }),
}
