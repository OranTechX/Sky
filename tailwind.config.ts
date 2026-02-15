// import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        // 主色系列
        brand: {
          50: '#EFF4FF',
          100: '#C8DAFF',
          200: '#96B8FB',
          300: '#73A0F9',
          400: '#5088F8',
          500: '#2D70F6',
          600: '#255CCB',
          700: '#1D49A0',
          800: '#153575',
          900: '#0E224A',
        },
        // 次要色系列
        secondary: {
          50: '#FEEFDC',
          100: '#FCDEB9',
          200: '#FBCE96',
          300: '#F9BD73',
          400: '#F8AD50',
          500: '#F69C2D',
          600: '#D78927',
          700: '#B97522',
          800: '#9A621C',
          900: '#7B4E17',
        }
      }
    }
  }
}
