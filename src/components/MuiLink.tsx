import { Link, Stack, Typography } from "@mui/material"

export const MuiLink = () => {
  return (
    <Stack spacing={4} direction="row" m={3}>
      <Link href="https://mui.com/" underline="hover" color="purple">
        Link
      </Link>
      <Typography variant="body1" component="div">
        <Link href="https://mui.com/" underline="hover" color="purple">
          Link2
        </Link>
      </Typography>
    </Stack>
  )
}
