import { Stack, TextField, TextFieldProps } from "@mui/material"
import { DatePicker } from "@mui/lab"
// import { SetStateAction, useState } from "react"

export const MuiPicker = () => {
  // const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  // console.log(selectedDate)
  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      {/* <DatePicker
        label="Date Picker"
        renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
          <TextField {...params} />
        )}
        value={selectedDate}
        // onChange={(newValue) => setSelectedDate(newValue)}
      /> */}
    </Stack>
  )
}
