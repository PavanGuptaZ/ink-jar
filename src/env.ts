import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    DATABASE_URI: z.string(),
    PAYLOAD_SECRET: z.string(),
  },
  client: {
    NEXT_PUBLIC_PAYLOAD_CMS_URL: z.string(),
  },
  runtimeEnv: {
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    DATABASE_URI: process.env.DATABASE_URI,
    NEXT_PUBLIC_PAYLOAD_CMS_URL: process.env.NEXT_PUBLIC_PAYLOAD_CMS_URL,
  },
})
