import { useEffect } from "react"
import { getTodoList } from "./TodoList.helpers"

export const TodoList = () => {
  useEffect(() => {getTodoList()}, [])

  return <>List</>
}