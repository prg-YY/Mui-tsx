import { Stack, Box } from "@mui/material"

export const MuiLayout = () => {
  return (
    <Stack sx={{ border: "1px solid" }} direction="row">
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",

          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        prg
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
      ></Box>
    </Stack>
  )
}
