import { useEffect, useState } from 'react'
import { getTodoList, TodoItem } from './TodoList.helpers'
import { ListItem } from './components'
import { Stack, Box } from '@mui/material'

export const TodoList = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [listItems, setListItems] = useState<TodoItem[]>([])

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
          <ListItem key={item.id} item={item} />
        ))}
      </Stack>
    </Stack>
  )
}
