import { atom } from 'nanostores';

export type todosStoreType = { id: number; text: string; checked: boolean };

export const $todosStore = atom<todosStoreType[]>([]);

export function addTodo(text: string) {
  const newTodo: todosStoreType = {
    id: Date.now(), 
    text,
    checked: false 
  };
  $todosStore.set([...$todosStore.get(), newTodo]);
}

export function deleteTodo(id: number) {
    $todosStore.set([...$todosStore.get()].filter(todo => todo.id !== id));
};

export function editTodo(id: number, newText: string) {
    $todosStore.set(
      $todosStore.get().map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  }

  export function toggleTodo(id: number) {
    $todosStore.set(
      $todosStore.get().map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }

  export function deleteSelectedTodos() {
    $todosStore.set($todosStore.get().filter(todo => !todo.checked));
  }