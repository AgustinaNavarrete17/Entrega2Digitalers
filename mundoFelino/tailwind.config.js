/** @type {import('tailwindcss').Config} */
export default {
  content: ['src/**/**.svelte'],
  theme: {
    extend: {
      //Aqui creo los colores personalizados que necesite:
      colors: {
        'azul-claro': '#243CFF',
        'rosa-pastel': '#FFD1DC',
        'lila': '#957DAD',
        'lilaTitulo': '#6C4575'
      }
    },
  },
  plugins: [],
}

