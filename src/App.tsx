/* eslint-disable @typescript-eslint/no-non-null-assertion */
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material'
import { theme } from '@flagz/style-guide-js'
import { Home } from './pages/Home'
import { fonts } from './assets/fonts'
import { FlagzProvider } from '@flagz/react-sdk'

function App() {
  return (
    <FlagzProvider apiKey="REACT_APP_FLAGZ_API_KEY">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* I know this is not ideal, but I just want it working for now tbh
          we can self host the fonts nicely later on */}
        <style>
          {fonts.poppins200}
          {fonts.poppins300}
          {fonts.poppins400}
          {fonts.poppins500}
        </style>
        <Home />
      </ThemeProvider>
    </FlagzProvider>
  )
}

export default App
