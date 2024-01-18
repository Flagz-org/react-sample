import { Box, Typography, Link } from '@mui/material'
import { Container } from '@mui/system'
import { theme } from '@flagz/style-guide-js'

export const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.divider,
        py: 1
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            color: 'white'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center'
            }}
          >
            <Typography
              variant="h1"
              sx={{ visibility: 'hidden', height: '0px', width: '0px' }}
            >
              Flagz
            </Typography>
            <Link
              href="/"
              sx={{
                textDecoration: 'none'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  color: theme.palette.text.primary
                }}
              >
                <Typography variant="h6" sx={{ ml: 1 }}>
                  Flagz
                </Typography>
              </Box>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
