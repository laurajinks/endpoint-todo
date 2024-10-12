import { useEffect, useState } from 'react'
import { getTodoList, TodoItem } from './TodoList.helpers'
import { ListItem } from './components'
import { Stack } from '@mui/material'

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

  if (isLoading) return <>Loading...</>

  return (
    <Stack spacing={1.5}>
      {listItems.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </Stack>
  )
}
