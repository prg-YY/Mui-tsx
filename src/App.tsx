// import { LocalizationProvider } from "@mui/x-date-pickers"
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import "./App.css"
import { createTheme, colors, ThemeProvider } from "@mui/material"
// import { MuiTheme } from "./components/MuiTheme"
import { MuiRsponsi } from "./components/MuiRsponsi"
// import { MuiMesonary } from "./components/MuiMesonary"
// import { MuiTabs } from "./components/MuiTabs"
// import { MuiTimeLine } from "./components/MuiTimeLine"
// import { MuiLoadingButton } from "./components/MuiLoadingButton"
// import { MuiSkeleton } from "./components/MuiSkeleton"
// import { MuiProgress } from "./components/MuiProgress"
// import { MuiDialog } from "./components/MuiDialog"
// import { MuiAlert } from "./components/MuiAlert"
// import { MuiSnackBar } from "./components/MuiSnackBar"
// import { MuiTable } from "./components/MuiTable"
// import { MuiToolTip } from "./components/MuiToolTip"
// import { MuiChip } from "./components/MuiChip"
// import { MuiAvatar } from "./components/MuiAvatar"
// import { MuiBadge } from "./components/MuiBadge"
// import { MuiBottomNavigation } from "./components/MuiBottomNavigation"
// import { MuiList } from "./components/MuiList"
// import { MuiBreadCrumbs } from "./components/MuiBreadCrumbs"
// import { MuiDrawer } from "./components/MuiDrawer"
// import { MuiSpeedDial } from "./components/MuiSpeedDial"
// import { MuiLink } from "./components/MuiLink"
// import { MuiAccordion } from "./components/MuiAccordion"
// import { MuiImageList } from "./components/MuiImageList"
// import { MuiNavBar } from "./components/MuiNavBar"
// import { MuiCard } from "./components/MuiCard"
// import { MuiLayout } from "./components/MuiLayout"
// import { AutoComplate } from "./components/AutoComplate"
// import { MuiRating } from "./components/MuiRating"
// import { MuiSwitch } from "./components/MuiSwitch"
// import { MuiCheckBox } from "./components/MuiCheckBox"
// import { RadioButton } from "./components/RadioButton"
// import { MuiSelect } from "./components/MuiSelect"
// import { MuiTextField } from "./components/MuiTextField"
// import { Buntton } from "./components/Buntton"
// import { MuiTypography } from "./components/MuiTypography"

const theme = createTheme({
  status: {
    danger: colors.red[500],
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.blueGrey[500],
      darker: colors.grey[700],
    },
  },
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <MuiTypography /> */}
        {/* <Buntton /> */}
        {/* <MuiTextField /> */}
        {/* <MuiSelect /> */}
        {/* <RadioButton />
      <MuiCheckBox /> */}
        {/* <MuiSwitch /> */}
        {/* <MuiRating /> */}
        {/* <AutoComplate /> */}
        {/* <MuiLayout /> */}
        {/* <MuiCard /> */}
        {/* <MuiAccordion /> */}
        {/* <MuiImageList /> */}
        {/* <MuiNavBar /> */}
        {/* <MuiLink /> */}
        {/* <MuiBreadCrumbs /> */}
        {/* <MuiDrawer /> */}
        {/* <MuiSpeedDial /> */}
        {/* <MuiBottomNavigation /> */}
        {/* <MuiAvatar /> */}
        {/* <MuiList /> */}
        {/* <MuiChip /> */}
        {/* <MuiToolTip /> */}
        {/* <MuiTable /> */}
        {/* <MuiAlert /> */}
        {/* <MuiSnackBar /> */}
        {/* <MuiDialog /> */}
        {/* <MuiProgress /> */}
        {/* <MuiSkeleton /> */}
        {/* <MuiLoadingButton /> */}
        {/* <MuiPicker /> */}
        {/* <MuiTabs /> */}
        {/* <MuiTimeLine /> */}
        {/* <MuiMesonary /> */}
        <MuiRsponsi />
        {/* <MuiTheme /> */}
      </div>
    </ThemeProvider>
  )
}

export default App
