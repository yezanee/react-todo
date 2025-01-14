import React from 'react'
import TodoFilter from './TodoFilter'

const TodoHeader = () => {
  return (
    <div className="flex items-center justify-between mb-2" id="task-control">
    <button className="px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
            data-cy="add-todo-button">Add Todo
    </button>
    
    {/* Header 안에 있는 요소 이므로 App.jsx에다 작성한 것과 다르게 투두필터는 헤더 안에다 작성 */}
    {<TodoFilter />}
  </div>
  )
}
export default TodoHeader