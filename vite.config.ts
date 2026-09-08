import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Nome do repositorio no GitHub. O deploy em GitHub Pages fica em
// https://<usuario>.github.io/<REPO_NAME>/ , por isso o `base`.
// Se voce apontar um dominio proprio (CNAME), troque para '/'.
const REPO_NAME = 'oralArtFront'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? `/${REPO_NAME}/` : '/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
}))
