import { IconButton, Tooltip } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"

export const MuiToolTip = () => {
  return (
    <Tooltip
      title="Delete"
      placement="right-end"
      arrow
      enterDelay={300}
      leaveDelay={300}
    >
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  )
}
