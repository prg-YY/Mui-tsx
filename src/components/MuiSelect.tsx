import { Box, TextField, MenuItem } from "@mui/material"
import { useState } from "react"

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([])
  console.log({ countries })

  const handleCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCountries(typeof value === "string" ? value.split(",") : value)
  }

  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={handleCountry}
        fullWidth
        SelectProps={{ multiple: true }}
        size="small"
        color="primary"
        helperText="Select Country"
        error
      >
        <MenuItem value="India">India</MenuItem>
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="UK">UK</MenuItem>
      </TextField>
    </Box>
  )
}
