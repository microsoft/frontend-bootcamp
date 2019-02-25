import uuid from 'uuid/v4';

export const actions = {
  addTodo: (label: string) => ({ type: 'addTodo', id: uuid(), label })
};
