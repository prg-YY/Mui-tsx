import { CircularProgress, LinearProgress, Stack } from "@mui/material"

export const MuiProgress = () => {
  return (
    <>
      <Stack spacing={2}>
        <CircularProgress color="error" />
        <CircularProgress color="success" />
        <LinearProgress variant="indeterminate" />
        <LinearProgress />
        <LinearProgress />
      </Stack>
    </>
  )
}
