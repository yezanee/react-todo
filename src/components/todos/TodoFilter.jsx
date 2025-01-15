import React from 'react'
import { TODO_CATEGORY_ICON } from '@/constants/icon'
const TodoFilter = ({category, onFilter}) => {

  const filterTodo = (event) => onFilter(event.target.value);
  return (
    <select className="p-2 text-gray-100 bg-gray-800 rounded"
            data-cy="todo-filter" // 자동화 테스트할 때 필요한 코드
            value={category}
            onChange={filterTodo}
            >
      
      <option value="ALL">All</option>
      <option value="TODO">{TODO_CATEGORY_ICON.TODO} To do</option>
      <option value="PROGRESS">{TODO_CATEGORY_ICON.PROGRESS} On progress</option>
      <option value="DONE">{TODO_CATEGORY_ICON.DONE} Done</option>
  </select>
  )
}
export default TodoFilter