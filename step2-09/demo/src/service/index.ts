import { TodoItem, Store } from '../store';
const HOST = 'http://localhost:3000';

export async function add(id: string, todo: TodoItem) {
  const response = await fetch(`${HOST}/todos/${id}`, {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(todo)
  });

  return await response.json();
}

export async function update(id: string, todo: TodoItem) {
  const response = await fetch(`${HOST}/todos/${id}`, {
    method: 'put',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(todo)
  });

  return await response.json();
}

export async function remove(id: string) {
  const response = await fetch(`${HOST}/todos/${id}`, {
    method: 'delete'
  });

  return await response.json();
}

export async function getAll() {
  const response = await fetch(`${HOST}/todos`, {
    method: 'get'
  });

  return await response.json();
}

export async function updateAll(todos: Store['todos']) {
  const response = await fetch(`${HOST}/todos`, {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(todos)
  });

  return await response.json();
}
