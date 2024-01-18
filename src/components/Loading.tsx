import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography
} from '@mui/material'

export const Loading = ({ withText = true }: { withText?: boolean }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Grid container direction="column" alignItems="center" spacing={3}>
        {withText ? (
          <Grid item>
            <Typography variant="body1">Loading ...</Typography>
          </Grid>
        ) : null}
        <Grid item>
          <Container maxWidth="md">
            <CircularProgress />
          </Container>
        </Grid>
      </Grid>
    </Box>
  )
}
