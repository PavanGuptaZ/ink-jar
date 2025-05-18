import { primitiveSchema } from '@/validations/primitive'
import { ZodSchema } from 'zod'

type SchemaKey = keyof typeof primitiveSchema

export const validateWithZod = (schema: ZodSchema | SchemaKey, data: any) => {
  const validationSchema = typeof schema === 'string' ? primitiveSchema[schema] : schema

  const result = validationSchema.safeParse(data)

  return result.success ? true : result.error.issues[0].message
}
