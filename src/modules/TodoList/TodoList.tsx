import { useEffect, useState } from 'react'
import {
  formatData,
  getTodoList,
  TodoItem,
  updateTodoItem,
} from './TodoList.helpers'
import { Stack, Box } from '@mui/material'
import { ListItem } from './components'

export const TodoList = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)
  const [listItems, setListItems] = useState<TodoItem[]>([])

  const updateItem = async (id: string, checked: boolean) => {
    setIsUpdating(true)

    const { data } = await updateTodoItem(id, checked)

    if (data.status === 'success') {
      const updated = listItems.map(item =>
        item.id === id ? { ...item, isComplete: checked } : item
      )
      setListItems(formatData(updated))
    }

    setIsUpdating(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const data = await getTodoList()
      setListItems(data)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  if (isLoading)
    return (
      <Box justifyContent="center" p={{ xs: 1, md: 3 }}>
        Loading...
      </Box>
    )

  return (
    <Stack alignItems="center" p={3}>
      <Stack spacing={1.5} sx={{ width: { xs: '90%', md: 550 } }}>
        {listItems.map(item => (
          <ListItem
            key={item.id}
            item={item}
            updateItem={updateItem}
            disabled={isUpdating}
          />
        ))}
      </Stack>
    </Stack>
  )
}
