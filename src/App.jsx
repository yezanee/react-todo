import DefaultLayout from './layouts/DefaultLayout'
import TodoHeader from './components/todos/TodoHeader'
import TodoBody from './components/todos/TodoBody'
import { useState } from 'react'

// 외부 서버로부터 받은 데이터라고 가정(ex. fetch('url))
const dummyTodos = [
  {
    id: 1,
    title: 'React 공부',
    summary: 'React를 공부한다.',
    category: 'TODO',
  },
  {
    id: 2,
    title: '점심 먹기',
    summary: '점심을 먹는다.',
    category: 'PROGRESS',
  },
  {
    id: 3,
    title: '커피 마시기',
    summary: '커피를 마신다.',
    category: 'DONE',
  }
  // 새롭게 추가된 할일 데이터
]


function App() {

  // 할일 관리 데이터를 하나의 상태로 관리
  const [todos, setTodos] = useState(dummyTodos);
  const [selectedCategory, setFilter] = useState('ALL');

  const addTodoHandler = (title, summary, category) => {
    const newTodo = {
      id: self.crypto.randomUUID(),
      title,
      summary,
      category
    }

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  }


  const updateTodoHandler = (updateTodo) => {
    const updatedTodos = todos.map(todo => todo.id === updateTodo.id ? { ...updateTodo } : todo);
    setTodos(updatedTodos);
  }

  const deleteTodoHandler = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

  const reorderTodos = (updatedTodos) => {
    setTodos(updatedTodos);
  };

  const filterTodos = () => selectedCategory === 'ALL' ?
    todos : todos.filter(todo => todo.category === selectedCategory);

  const filteredTodos = filterTodos();

  return (
    <>
      <DefaultLayout>
        <header>
              <h1 className='pt-8 mx-auto text-red-200 max-w-max text-7xl'>
                <img className='ml-4' src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thought%20Balloon.png" alt="Thought Balloon" width="75" height="75" />
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Seal.png" alt="Seal" width="75" height="75" />
                </h1>
        </header>

        <section className='max-w-xl m-4 mx-auto'>
          <TodoHeader onAdd={addTodoHandler} category={selectedCategory} onFilter={setFilter}/>
          <TodoBody
                  todos={filteredTodos}
                  onUpdate={updateTodoHandler}
                  onDelete={deleteTodoHandler}
                  onReorder={reorderTodos}
          />
        </section>
      </DefaultLayout>    
    </>
  )
}

export default App
