import { Box, Container, Typography } from '@mui/material'
import { theme } from '@flagz/style-guide-js'

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.divider,
        py: 2
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="body2"
          sx={{ color: theme.palette.text.secondary }}
        >
          {new Date().getFullYear()} Flagz
        </Typography>
      </Container>
    </Box>
  )
}
