import axios from 'axios'

export interface TodoItem {
  id: string
  description: string
  isComplete: boolean
  dueDate: string | null
}

export const getTodoList = async (): Promise<TodoItem[]> => {
  const response = await axios.get(
    'https://b0f179aa-a791-47b5-a7ca-5585ba9e3642.mock.pstmn.io/get',
    { headers: { 'x-api-key': process.env.REACT_APP_XAPIKEY } }
  )

  return response.data
}
