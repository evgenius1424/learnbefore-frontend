/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GOOGLE_CLIENT_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}