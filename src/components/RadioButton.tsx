import {
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
} from "@mui/material"
import { useState } from "react"
export const RadioButton = () => {
  const [values, setValues] = useState("")
  console.log({ values })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues(event.target.value)
  }
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years of Experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={values}
          onChange={handleChange}
          row
          //   SelectProps={{ multiple: true }}
        >
          <FormControlLabel
            control={<Radio />}
            label="0-2"
            value="0-2"
          ></FormControlLabel>
          <FormControlLabel
            control={<Radio />}
            label="3-5"
            value="3-5"
          ></FormControlLabel>
          <FormControlLabel
            control={<Radio size="medium" color="success" />}
            label="6-10"
            value="6-10"
          ></FormControlLabel>
        </RadioGroup>
      </FormControl>
    </Box>
  )
}
