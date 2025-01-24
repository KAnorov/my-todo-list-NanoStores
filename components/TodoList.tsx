// src/components/TodoList.tsx

import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { $todosStore, addTodo, deleteSelectedTodos } from '@/stores/todos';
import TodoItem from './TodoItem';

export default function TodoList() {
    const todos = useStore($todosStore);
    const [inputValue, setInputValue] = useState('');
  
    const handleAddTodo = () => {
      if (inputValue.trim()) {
        addTodo(inputValue);
        setInputValue('');
      }
    };
  
    return (
      <div className="todo-list">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Добавить новое дело"
        />
        <button onClick={handleAddTodo}>Добавить</button>
        <button onClick={deleteSelectedTodos}>Удалить выбранные</button>
        <div>
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    );
};
  

