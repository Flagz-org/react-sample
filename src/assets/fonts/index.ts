// just let google host them for now
const gFont = (family: string, weight: number) => {
  return `@import url('https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap');`
}

export const fonts = {
  poppins200: gFont('Poppins', 200),
  poppins300: gFont('Poppins', 300),
  poppins400: gFont('Poppins', 400),
  poppins500: gFont('Poppins', 500)
}
