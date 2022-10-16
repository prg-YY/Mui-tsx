import { SwapVerticalCircleOutlined } from "@mui/icons-material"
import { LoadingButton } from "@mui/lab"
import { Box, Stack } from "@mui/material"

export const MuiLoadingButton = () => {
  return (
    <Box sx={{ width: "auto" }}>
      <Stack spacing={4} direction="column">
        <LoadingButton variant="contained">Submitted</LoadingButton>
        <LoadingButton variant="outlined" loading>
          Submitted
        </LoadingButton>
        <LoadingButton variant="contained" loadingIndicator="Loading,,,">
          Fetch Data
        </LoadingButton>
        <LoadingButton variant="outlined" loadingIndicator="Loading,,," loading>
          Fetch Data
        </LoadingButton>
        <LoadingButton
          variant="contained"
          loadingPosition="start"
          startIcon={<SwapVerticalCircleOutlined />}
        >
          Save
        </LoadingButton>
        <LoadingButton
          loading
          variant="contained"
          loadingPosition="start"
          startIcon={<SwapVerticalCircleOutlined />}
        >
          Save
        </LoadingButton>
      </Stack>
    </Box>
  )
}
