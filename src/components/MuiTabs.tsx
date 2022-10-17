import { Box, Tab } from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { useState } from "react"
import FavoriteIcon from "@mui/icons-material/Favorite"
export const MuiTabs = () => {
  const [value, setValue] = useState("1")
  const handleChange = (value: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "300px" }}>
          <TabList
            aria-label="Tabs example"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              label="Item One"
              value="1"
              icon={<FavoriteIcon />}
              iconPosition="start"
            />
            <Tab label="Item Two" value="2" disabled />
            <Tab label="Item Three" value="3" />
            <Tab label="Item Four" value="4" />
            <Tab label="Item Five" value="5" />
            <Tab label="Item Six" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
        <TabPanel value="5">Item Five</TabPanel>
        <TabPanel value="6">Item Six</TabPanel>
      </TabContext>
    </Box>
  )
}
