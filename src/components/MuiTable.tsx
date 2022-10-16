import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "500px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &last-child th": { boder: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const tableData = [
  {
    id: 1,
    first_name: "Esta",
    last_name: "Habert",
    email: "ehabert0@nsw.gov.au",
    gender: "Female",
    ip_address: "183.128.119.188",
  },
  {
    id: 2,
    first_name: "Vail",
    last_name: "Glading",
    email: "vglading1@hc360.com",
    gender: "Male",
    ip_address: "32.85.253.105",
  },
  {
    id: 3,
    first_name: "Jae",
    last_name: "Bim",
    email: "jbim2@ed.gov",
    gender: "Male",
    ip_address: "139.130.182.100",
  },
  {
    id: 4,
    first_name: "Jeri",
    last_name: "Lawlie",
    email: "jlawlie3@samsung.com",
    gender: "Bigender",
    ip_address: "53.36.86.50",
  },
  {
    id: 5,
    first_name: "Dulsea",
    last_name: "Vial",
    email: "dvial4@ovh.net",
    gender: "Female",
    ip_address: "64.201.77.153",
  },
  {
    id: 6,
    first_name: "Sophie",
    last_name: "Sidwick",
    email: "ssidwick5@e-recht24.de",
    gender: "Female",
    ip_address: "246.241.151.15",
  },
  {
    id: 7,
    first_name: "Ricky",
    last_name: "Roderham",
    email: "rroderham6@ftc.gov",
    gender: "Male",
    ip_address: "153.83.34.255",
  },
  {
    id: 8,
    first_name: "Franni",
    last_name: "Klainman",
    email: "fklainman7@paginegialle.it",
    gender: "Female",
    ip_address: "173.145.250.73",
  },
  {
    id: 9,
    first_name: "Valery",
    last_name: "Lazenbury",
    email: "vlazenbury8@prlog.org",
    gender: "Female",
    ip_address: "116.152.205.22",
  },
  {
    id: 10,
    first_name: "Berenice",
    last_name: "Bims",
    email: "bbims9@cbslocal.com",
    gender: "Female",
    ip_address: "144.198.93.88",
  },
]
