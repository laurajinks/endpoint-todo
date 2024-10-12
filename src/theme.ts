import { alpha, createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: { main: '#383E54' },
    success: { main: alpha('#00FF00', 0.2) },
    error: { main: alpha('#FF0000', 0.2) },
    info: { main: alpha('#C4C4C4', 0.2) },
  },
})
