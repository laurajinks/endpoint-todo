import axios from 'axios'

export interface TodoItem {
  id: string
  description: string
  isComplete: boolean
  isOverdue: boolean
  dueDate: string | null
}

export const formatData = (data: Omit<TodoItem, 'isOverdue'>[]): TodoItem[] => {
  return data
    .map(d => ({
      ...d,
      isOverdue:
        d.dueDate && !d.isComplete ? new Date(d.dueDate) < new Date() : false,
    }))
    .sort((a, b) => {
      if (a.isOverdue) return -1
      if (a.isComplete) return 1
      if (b.isComplete) return -1
      if (a.dueDate && b.dueDate) {
        if (new Date(a.dueDate).valueOf() > new Date(b.dueDate).valueOf())
          return -1
      }
      return 0
    })
}

export const getTodoList = async (): Promise<TodoItem[]> => {
  const response = await axios.get(
    'https://b0f179aa-a791-47b5-a7ca-5585ba9e3642.mock.pstmn.io/get',
    { headers: { 'x-api-key': process.env.REACT_APP_XAPIKEY } }
  )

  return formatData(response.data)
}

export const updateTodoItem = (id: string, isComplete: boolean) => {
  return axios.patch(
    `https://b0f179aa-a791-47b5-a7ca-5585ba9e3642.mock.pstmn.io/patch/${id}`,
    { isComplete },
    { headers: { 'x-api-key': process.env.REACT_APP_XAPIKEY } }
  )
}
