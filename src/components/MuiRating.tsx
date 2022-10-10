import { useState } from "react"
import { Rating, Stack } from "@mui/material"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"

export const MuiRating = () => {
  const [value, setValue] = useState<null | number>(3)
  console.log({ value })

  const changeHandler = (e: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue)
  }
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={changeHandler}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        // readOnly
        highlightSelectedOnly
      />
    </Stack>
  )
}
