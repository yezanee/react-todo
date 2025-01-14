import React from 'react'
import TodoItem from './TodoItem'

const todos = [
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
]

const TodoBody = () => {
  return (
    <ul
        className='px-0 my-8'>
        {todos.map(todo => <TodoItem 
                              // todo라는 이름의 props를 TodoItem에 전달
                              todo={todo}
                              key={todo.id}
                            />)}
    </ul>
  )
}
export default TodoBody