import { Alert, Stack, AlertTitle, Button } from "@mui/material"
import CheckIcon from "@mui/icons-material/Check"

export const MuiAlert = () => {
  return (
    <Stack>
      <Alert severity="error">THis is an error alert</Alert>
      <Alert severity="warning">THis is an warning alert</Alert>
      <Alert severity="info">THis is an info alert</Alert>
      <Alert severity="success">THis is an success alert</Alert>

      <Alert variant="outlined" severity="error">
        THis is an error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        THis is an warning alert
      </Alert>
      <Alert variant="outlined" severity="info">
        THis is an info alert
      </Alert>
      <Alert variant="outlined" severity="success">
        THis is an success alert
      </Alert>

      <Alert variant="filled" severity="error" onClose={() => alert("closed")}>
        <AlertTitle>erorr</AlertTitle>
        THis is an error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>warning</AlertTitle>
        THis is an warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>info</AlertTitle>
        THis is an info alert
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckIcon fontSize="inherit" />}
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        <AlertTitle>success</AlertTitle>
        THis is an success alert
      </Alert>
    </Stack>
  )
}
