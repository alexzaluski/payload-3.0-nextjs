import nextjs from '@eslint/js'
import next from 'eslint-config-next'

export default [
  ...nextjs.configs.recommended,
  ...next,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      // your custom rules here
    },
  },
]
