import { Autocomplete, Stack, TextField } from "@mui/material"
import { useState } from "react"

type Skill = {
  id: number
  label: string
}

const skills = ["HTML", "CSS", "JavaScript", "Typescript", "React", "NextJs"]

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}))

export const AutoComplate = () => {
  const [value, setValue] = useState<string | null>(null)
  const [skill, setSkill] = useState<Skill | null>(null)
  console.log({ skill })

  const changeHandler = (e: any, newValue: string | null) => {
    setValue(newValue)
  }

  return (
    <Stack spacing={2} width="200px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={changeHandler}
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(e: any, newValue: Skill | null) => {
          setSkill(newValue)
        }}
      />
    </Stack>
  )
}
