import {
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material"
import { Masonry } from "@mui/lab"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const heights = [
  150, 30, 90, 70, 110, 150, 130, 200, 80, 50, 90, 100, 150, 300, 90, 50, 110,
  150,
]

export const MuiMesonary = () => {
  return (
    <Box sx={{ width: 500, minHeight: 400, bgcolor: "black", color: "white" }}>
      <Masonry columns={4} spacing={2}>
        {heights.map((height, index) => (
          <Paper
            key={index}
            sx={{
              //   display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
              //   height,
              border: "1px solid",
            }}
          >
            <Accordion sx={{ minHeight: height }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Accordion {index + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>Content</AccordionDetails>
            </Accordion>
          </Paper>
        ))}
      </Masonry>
    </Box>
  )
}
