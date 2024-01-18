import { useFlags } from '@flagz/react-sdk'
import { Card, Stack, Typography, Box } from '@mui/material'
import { Loading } from '../Loading'

export const HomeComponent = () => {
  const flags = useFlags()
  // inspect to have a peep at the flags
  console.log(flags)

  const { loading, showCard, error } = flags

  return (
    <Stack spacing={4} sx={{ height: '100%' }}>
      {loading ? (
        <Loading />
      ) : (
        <Stack spacing={2} direction="column">
          <Typography variant="h2">React app sample</Typography>
          {error && (
            <Typography variant="body1">
              There was an error loading the flags 😢
            </Typography>
          )}
          {showCard ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <Card sx={{ ml: 2 }}>
                <Box sx={{ padding: 4 }}>
                  <Stack spacing={2} direction="column">
                    <Typography variant="body1">Show card is on 🎉</Typography>
                  </Stack>
                </Box>
              </Card>
            </Box>
          ) : (
            <Typography variant="h2">Show card is off 😢</Typography>
          )}
        </Stack>
      )}
    </Stack>
  )
}
