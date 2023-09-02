import { TodoListContext } from './context/TodoListContext'
import { Container } from './components/Container'
import { Header } from './components/Header'
import { Content } from './components/Content'
import { Tasks } from './components/Tasks'
import { Task } from './components/Task'
import { useContext, useEffect, useRef } from 'react'
import { StatusTasks } from './components/StatusTasks'
import { Button } from './components/Button'
import { FieldTitleTask } from './components/FieldTitleTask'

function App() {
  const { tasks, getTasks } = useContext(TodoListContext)

  useEffect(() => {
    getTasks();
  }, [tasks])

  return (
    <Container>
      <Header />
      <Content>
        <form className="w-full space-x-2 flex justify-between -mt-8 ">
          <FieldTitleTask />
          <Button />
        </form>
        <StatusTasks tasks={tasks} />
        <Tasks>
          {tasks.map(task => {
            return (
              <Task key={task.id} task={task} />
            )
          })}
        </Tasks>
      </Content>
    </Container>
  )
}

export default App
