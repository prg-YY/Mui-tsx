import { Stack, Badge } from "@mui/material"
import MailIcon from "@mui/icons-material/Mail"

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={5} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="warning" showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={123} color="success" max={999}>
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="success" invisible={true}>
        <MailIcon />
      </Badge>
    </Stack>
  )
}
