import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useState } from "react"

export const MuiAccordion = () => {
  const [expended, setExpanded] = useState<false | string>(false)
  const changeHandler = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <>
      <Accordion
        expanded={expended === "panel1"}
        onChange={(e, isExpanded) => changeHandler(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion Summary</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expended === "panel2"}
        onChange={(e, isExpanded) => changeHandler(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion Summary2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expended === "panel3"}
        onChange={(e, isExpanded) => changeHandler(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion Summary3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expended === "panel4"}
        onChange={(e, isExpanded) => changeHandler(isExpanded, "panel4")}
      >
        <AccordionSummary
          id="panel-header"
          aria-controls="panel4-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion Summary4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}
