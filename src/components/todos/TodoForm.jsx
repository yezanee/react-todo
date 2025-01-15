import React, { useState } from 'react'
import { TODO_CATEGORY_ICON } from '@/constants/icon'

const TodoForm = ({onClose, onAddOrUpdate, children, todo}) => {

    const isNewTodoForm = () => children.endsWith('등록') ? true : false;
    // 입력폼을 개별 상태로 관리
    const [title, setTitle] = useState(isNewTodoForm(children) ? '' : todo.title);
    const [summary, setSummary] = useState(isNewTodoForm(children) ? '' : todo.summary);
    const [category, setCategory] = useState(isNewTodoForm(children) ? 'TODO' : todo.category);

 
    const addOrUpdateTodoHandler = () => {
        if (isNewTodoForm(children)) {
            onAddOrUpdate(title, summary, category);
        } else {
            const updateTodo = {
                id: todo.id,
                title,
                summary,
                category
            }
            onAddOrUpdate(updateTodo);
        }
        onClose();
    }

    return (
        <>
            <h3 className="text-3xl text-red-200">{children}</h3>
            <form className='my-2'>
                <div>
                    <label className='block mb-2 text-xl text-white' htmlFor='title'>Title</label>
                    <input className='w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded'
                           type='text' id='title'
                           value={title}
                           onChange={(event) => setTitle(event.target.value)} />
                </div>
                <div>
                    <label className='block mb-2 text-xl text-white' htmlFor='summary'>Summary</label>
                    <textarea className='w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded'
                              id='summary' rows='5'
                              value={summary}
                              onChange={(event) => setSummary(event.target.value)} />
                </div>
                <div>
                    <label className='block mb-2 text-xl text-white' htmlFor='category'>Category</label>
                    <select className='w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded'
                            id='category'
                            value={category}
                            onChange={(event) => setCategory(event.target.value)}>
                        <option value='TODO'>{TODO_CATEGORY_ICON.TODO} To do</option>
                        <option value='PROGRESS'>{TODO_CATEGORY_ICON.PROGRESS} On progress</option>
                        <option value='DONE'>{TODO_CATEGORY_ICON.DONE} Done</option>
                    </select>
                </div>
                <div className='flex justify-end gap-4'>
                    <button
                        onClick = {onClose}
                        className='text-xl text-white' type='button'>취소</button>
                    <button
                        onClick = {addOrUpdateTodoHandler}
                        className='px-6 py-3 text-xl text-red-200' type='button'>{isNewTodoForm(children) ? '등록' : '수정'}</button>
                </div>
            </form>
        </>
    )
};
export default TodoForm