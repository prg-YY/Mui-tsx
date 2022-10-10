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
  const [value, setValue] = useState("")
  const [values, setValues] = useState<string[]>([])

  console.log({ value })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  const handleValuesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = values.indexOf(event.target.value)
    if (index === -1) {
      setValues([...values, event.target.value])
    } else {
      setValues(values.filter((value) => value !== event.target.value))
    }
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
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={
              <Radio
                checked={values.includes("0-2")}
                onChange={handleValuesChange}
              />
            }
            label="0-2"
            value="0-2"
          ></FormControlLabel>
          <FormControlLabel
            control={
              <Radio
                checked={values.includes("3-5")}
                onChange={handleValuesChange}
              />
            }
            label="3-5"
            value="3-5"
          ></FormControlLabel>
          <FormControlLabel
            control={
              <Radio
                checked={values.includes("6-10")}
                onChange={handleValuesChange}
              />
            }
            label="6-10"
            value="6-10"
          ></FormControlLabel>
        </RadioGroup>
      </FormControl>
    </Box>
  )
}
