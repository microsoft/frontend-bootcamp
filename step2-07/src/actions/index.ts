export const addTodo = (label: string) => ({ type: 'addTodo', label });
export const remove = (id: string) => ({ type: 'remove', id });
export const complete = (id: string) => ({ type: 'complete', id });
export const clear = () => ({ type: 'clear' });
