import { ThemeProvider } from '@mui/material'
import './App.css'
import { AppHeader } from './common/components'
import { TodoList } from './modules/TodoList'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppHeader />
      <TodoList />
    </ThemeProvider>
  )
}

export default App
