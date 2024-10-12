import { Box, Checkbox, Stack, Typography, useTheme } from '@mui/material'
import { format } from 'date-fns'
import { TodoItem } from '../TodoList.helpers'

export const ListItem = ({ item }: { item: TodoItem }) => {
  const theme = useTheme()
  const { dueDate, isComplete, isOverdue } = item

  const getColor = () => {
    if (isComplete) return theme.palette.success.main
    if (isOverdue) return theme.palette.error.main
    return theme.palette.info.main
  }

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        background: getColor(),
      }}
    >
      <Stack direction="row" alignItems="center" sx={{ p: 0.5 }}>
        <Checkbox />
        <Typography
          fontSize={18}
          fontWeight={400}
          sx={{
            textDecoration: isComplete ? 'line-through' : undefined,
          }}
        >
          {item.description}
        </Typography>
      </Stack>
      {dueDate && (
        <Box sx={{ border: '1px solid black', p: 0.5, mr: 1 }}>
          <Typography>{format(dueDate, 'MM/dd/yyyy')}</Typography>
        </Box>
      )}
    </Stack>
  )
}
