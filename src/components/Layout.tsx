import { Box, Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Grid container direction="column" minHeight="100vh">
        <Grid item>
          <Header />
        </Grid>
        <Grid
          item
          flex="1"
          sx={{
            display: 'flex',
            width: '100%'
          }}
        >
          <Container maxWidth="xl" sx={{ flex: '1' }}>
            <Box sx={{ py: 3, height: '100%' }}>{children}</Box>
          </Container>
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  )
}
