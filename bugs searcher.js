const settings =
  typeof process.env.NEXT_PUBLIC_SETTINGS === 'string'
    ? JSON.parse(process.env.NEXT_PUBLIC_SETTINGS)
    : {}

 publicRuntimeConfig: {
    // Will be available on both server and client
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    settings
  }

{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,}
}

  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", "types.d.ts"],
  "exclude": ["node_modules"]
