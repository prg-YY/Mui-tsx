import { Chip, Stack, Avatar } from "@mui/material"
import ClearIcon from "@mui/icons-material/Clear"
import { useState } from "react"

export const MuiChip = () => {
  const [chips, setChips] = useState(["one", "two", "three"])
  const deleteHanlder = (chipD: string) => {
    setChips(chips.filter((chip) => chip !== chipD))
  }
  return (
    <Stack spacing={4} direction="column">
      <Chip
        avatar={
          <Avatar>
            <ClearIcon />
          </Avatar>
        }
        label="Delete"
        color="primary"
        size="medium"
        variant="outlined"
      />
      <Chip
        label="Click"
        color="primary"
        size="medium"
        variant="filled"
        onClick={() => alert()}
      />
      <Chip
        label="Delete"
        color="primary"
        onClick={() => alert("Clicked")}
        onDelete={() => alert("deleted")}
      />
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => deleteHanlder(chip)} />
      ))}
    </Stack>
  )
}
