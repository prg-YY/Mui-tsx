import { Button, Snackbar, Alert, AlertProps } from "@mui/material"
import { useState, forwardRef } from "react"

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} variant="standard" {...props} />
  }
)

export const MuiSnackBar = () => {
  const [open, setOpen] = useState(false)
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show snackbar</Button>
      {/* <Button onClick={handleClick}>Show snackbar</Button>

      <Button onClick={handleClickVariant("success")}>
        Show success snackbar
      </Button>
      <Button onClick={() => setOpen(true)}>Open snackbar</Button> */}
      {/* <Snackbar
        message="Snackbar message"
        autoHideDuration={100}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      /> */}
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <SnackbarAlert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          This is a success message.
        </SnackbarAlert>
      </Snackbar>
    </>
  )
}
