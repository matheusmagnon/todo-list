import { PlusCircle, Trash } from 'phosphor-react'

import { TodoListContext, TodoListProvider } from './context/TodoListContext'
import { Container } from './components/Container'
import { Header } from './components/Header'
import { Content } from './components/Content'
import { Tasks } from './components/Tasks'
import { Task } from './components/Task'
import { useContext, useRef } from 'react'
import { StatusTasks } from './components/StatusTasks'
import { Buttom } from './components/Buttom'
import { FieldAddTask } from './components/FieldAddTask'

function App() {
  const { tasks } = useContext(TodoListContext)

  return (
    <Container>
      <Header />
      <Content>
        <form className="w-full space-x-2 flex justify-between -mt-8 ">
          <FieldAddTask />
          <Buttom />
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
