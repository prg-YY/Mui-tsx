import { useState } from "react"
import { Box, FormControlLabel, Switch } from "@mui/material"

export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false)
  console.log({ checked })

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
  }

  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={
          <Switch
            checked={checked}
            onChange={changeHandler}
            size="small"
            color="success"
          />
        }
      />
    </Box>
  )
}
