import { AppBar, Typography } from '@mui/material'

export const AppHeader = () => {
  return (
    <AppBar
      position="static"
      sx={{ p: 2.5, background: t => t.palette.primary.main }}
    >
      <Typography fontSize={18} fontWeight={700}>
        Todo App
      </Typography>
    </AppBar>
  )
}
