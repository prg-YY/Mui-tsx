import { useState } from "react"
import { Box, Drawer, Typography, IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

export const MuiDrawer = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Drawer
          </Typography>
        </Box>
      </Drawer>
    </>
  )
}
