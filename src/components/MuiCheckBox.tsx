import { useState } from "react"
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material"
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded"
import BookmarkIcon from "@mui/icons-material/Bookmark"

export const MuiCheckBox = () => {
  const [value, setValue] = useState(false)
  const [skills, setSkills] = useState<string[]>([])
  console.log({ value })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked)
  }
  //.first option
  //   const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const { value } = e.target
  //     if (skills.includes(value)) {
  //       setSkills(skills.filter((skill) => skill !== value))
  //     } else {
  //       setSkills([...skills, value])
  //     }
  //   }
  //.second option
  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(e.target.value)
    if (index === -1) {
      setSkills([...skills, e.target.value])
    } else {
      setSkills(skills.filter((skill) => skill !== e.target.value))
    }
  }

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="Checked"
          control={
            <Checkbox
              size="small"
              color="secondary"
              checked={value}
              onChange={handleChange}
            />
          }
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkIcon />}
          checkedIcon={<BookmarkAddedIcon />}
          checked={value}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              value="html"
              control={
                <Checkbox
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value="css"
              control={
                <Checkbox
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="JS"
              value="js"
              control={
                <Checkbox
                  checked={skills.includes("js")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
          <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  )
}
