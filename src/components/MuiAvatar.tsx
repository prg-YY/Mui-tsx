import { Avatar, AvatarGroup, Stack } from "@mui/material"
import React from "react"

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar alt="Remy Sharp" sx={{ bgcolor: "success.light" }}>
          VW
        </Avatar>

        <Avatar alt="Travis Howard" sx={{ bgcolor: "error.light" }}>
          TP
        </Avatar>
        <Avatar alt="Cindy Baker" sx={{ bgcolor: "primary.light" }}>
          SC
        </Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3}>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Cindy"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/79.jpg"
            alt="Max"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/women/21.jpg"
            alt="GUL"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="ALIM"
          />
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3} variant="circular">
          <Avatar alt="Remy Sharp" sx={{ bgcolor: "success.light" }}>
            VW
          </Avatar>

          <Avatar alt="Travis Howard" sx={{ bgcolor: "error.light" }}>
            TP
          </Avatar>
          <Avatar alt="Cindy Baker" sx={{ bgcolor: "primary.light" }}>
            SC
          </Avatar>
        </AvatarGroup>
      </Stack>
    </Stack>
  )
}
