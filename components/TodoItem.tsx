import { useState } from 'react';
import { todosStoreType, deleteTodo, editTodo, toggleTodo } from '@/stores/todos';

interface TodoItemProps {
  todo: todosStoreType;
}

export default function TodoItem({ todo }:TodoItemProps)  {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);  

  const handleEdit = () => {
    if (newText.trim()) { 
      editTodo(todo.id, newText);
      setIsEditing(false);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(e.target.value);
  };

  return <>
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => toggleTodo(todo.id)} 
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={handleTextChange} 
          />
          <button onClick={handleEdit}>Сохранить</button>
          <button onClick={() => setIsEditing(false)}>Отменить</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => {
            setIsEditing(true);
            setNewText(todo.text);
          }}>Редактировать</button>
          <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
        </>
      )}
    </div>
    </>
};

