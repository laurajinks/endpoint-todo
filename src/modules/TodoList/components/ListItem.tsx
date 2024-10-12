import {
  Box,
  Checkbox,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { format } from 'date-fns'
import { TodoItem } from '../TodoList.helpers'

interface ListItemProps {
  item: TodoItem
  updateItem: (id: string, checked: boolean) => void
  disabled: boolean
}

export const ListItem = ({ item, updateItem, disabled }: ListItemProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const { dueDate, isComplete, isOverdue } = item

  const getColor = () => {
    if (isComplete) return theme.palette.success.main
    if (isOverdue) return theme.palette.error.main
    return theme.palette.info.main
  }

  const handleCheck = (checked: boolean) => {
    updateItem(item.id, checked)
  }

  return (
    <Stack
      direction={isMobile ? 'column' : 'row'}
      justifyContent="space-between"
      alignItems={isMobile ? 'flex-start' : 'center'}
      sx={{
        background: getColor(),
      }}
    >
      <Stack direction="row" alignItems="center" sx={{ p: 0.5 }}>
        <Checkbox
          checked={isComplete}
          onChange={(_, checked) => handleCheck(checked)}
          disabled={disabled}
        />
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
        <Box
          sx={{
            border: '1px solid black',
            p: 0.5,
            mr: 1,
            mb: { xs: 1, sm: 0 },
            ml: { xs: 'auto', sm: 0 },
          }}
        >
          <Typography>{format(dueDate, 'MM/dd/yyyy')}</Typography>
        </Box>
      )}
    </Stack>
  )
}
