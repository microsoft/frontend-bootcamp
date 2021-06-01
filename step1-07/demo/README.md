# Step 1.7 - Types and creating a UI-driven state (Demo)

Now that we have a UI that is purely driven by the state of our app, we need to add functionality to allow the UI to modify the state. This is our core "business logic" and handles our basic "CRUD" operations: Create, Read, Update, Delete.

## Intro to TypeScript

Taking a look at our components in `TodoApp`, you can see that our list of props is getting not just longer, but much more complex! We're passing through functions with various signatures, complex `todos` objects, and filter strings which are always one of three values.

As applications grow, it becomes difficult to remember what each function does or what each todo contains. Also, as JavaScript is a dynamically typed language, if I wanted to change the value of `todos` to an array inside my `TodoList`, JavaScript wouldn't care. But if `TodoListItems` was expecting an object, our application would break.

For these two reasons, the industry is shifting to writing applications that are strongly typed, and many are using TypeScript to accomplish that.

As [TypeScript's website](https://www.typescriptlang.org/) states:

> TypeScript is a superset of JavaScript that compiles to plain JavaScript.

If you've used [Sass](https://sass-lang.com/), you're familiar with this concept. In the same way that all valid CSS is valid Sass, all valid JavaScript is valid TypeScript. That's why our exercises have been written in `ts` and `tsx` files instead of `js` and `jsx`.

Let's dive in and see how TypeScript can help clarify our component props and guard against future regressions.

# Demo

Let's start off in the TodoList, as that has the most data flow up and down. There isn't any interactive UI in this component, as we're simply passing `completed` down to each `TodoListItem`, but we can write a props interface to make sure that everything gets passed down properly.

## Writing TodoListProps

Looking at our `TodoApp` we know that `TodoList` has three props: `filter`, `todos`, and `complete`. We'll start by creating an interface called `TodoListProps` that represents this component's props.

```ts
interface TodoListProps {
  filter: any;
  clearCompleted: any;
  todos: any;
}
```

> Note that we're using the `any` keyword for now. This won't give us any type safety, but it does let us specify valid prop names we can pass to this component.

With that interface written, we'll add it to our component.

```ts
export const TodoList = (props: TodoListProps) => {
```

Now that we have a typed component, let's go back to our `TodoApp` and see what happens if we try to change the name of a prop.

## Adding type safety

So far we've only established what our prop names are, not the type of values inside of them. Let's first look at `filter` and see how we can improve that prop's type safety.

### Filter Type

We know that `filter` shouldn't be an object, array or function, so we can specify it should always be a string like this:

```ts
interface TodoListProps {
  filter: string;
  toggleCompleted: any;
  todos: any;
}
```

But since we know that the filter can be only one of three values, we can make that explicit with a [union type](https://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types):

```ts
interface TodoListProps {
  filter: 'all' | 'active' | 'completed';
  toggleCompleted: any;
  todos: any;
}
```

Now try going back to `TodoApp` and changing the `filter` attribute in `TodoList` to something else. You'll see an error in the editor (if using VS Code) and on the command line when you save the file.

### Complete Type

The `toggleComplete` prop isn't data, but a function.

```ts
interface TodoListProps {
  filter: 'all' | 'active' | 'completed';
  toggleCompleted: (id: string) => void;
  todos: any;
}
```

For functions we are concerned with the parameters passed in as well as returned. You can see in the example above that the function takes in an `id` of type string and returns `void`, which means it has no returned value.

> Technically, all functions in JavaScript return `undefined` if no other return value is specified, but declaring a return type of `void` causes TypeScript to error if you try to return a value from the function (or use its default returned value of `undefined`).

## Todos Type

The `todos` prop is an array of objects where each of those objects represent a `todo`. For now we'll write that `todo` interface right into the list props;

```ts
interface TodoListProps {
  filter: 'all' | 'active' | 'completed';
  toggleCompleted: (id: string) => void;
  todos: [
    {
      id: string;
      label: string;
      status: string;
    }
  ];
}
```

Now that our interface is complete, try changing the word "all" in `filter === all` and see that VS Code will tell you this condition will always be false. Compare this to plain JavaScript: if you had a typo in that line, you wouldn't understand why your filter wasn't working.

## Sharing types

Most of our components will need to specify types for `todos` and `filter`, so it's a good thing that TypeScript allows us to share types between files. I've already written up and exported those shared types in the file `TodoApp.types.ts`, so we just need to import them and use them in our interface.

```ts
import { FilterTypes, Todos } from '../TodoApp.types';

interface TodoListProps {
  filter: FilterTypes;
  clearCompleted: (id: string) => void;
  todos: Todos;
}
```

## Writing TodoListItemProps

Jumping down to the TodoListItem, as we start to write the `TodoListItemProps` we realize that three of the props, `label`, `status`, `id`, have already been defined in the `TodoItem` interface. So we can make `TodoListItemProps` reuse the `TodoItem` interface by extending it.

```ts
import { toggleCompleted } from '../TodoApp.types';

interface TodoListItemProps extends TodoItem {
  toggleCompleted: toggleCompleted;
}
```

The end result of this is an interface with all four properties: `id`, `toggleCompleted`, `status` and `label`.

Next we can pull in the remaining props in the render function:

```jsx
const { label, status, id, toggleCompleted } = props;
```

And then use the input's `onChange` event to call a function that toggles the todo's completed state. We can see in the signature that `toggleCompleted` expects an `id` of type string, so we'll pass our `id` prop in.

> A [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) is a function passed into a component as a prop.

```jsx
const handleCheck = () => toggleCompleted(id);
...
<input type="checkbox" checked={status === 'completed'} onChange={handleCheck} />
```

## Passing props down

Now that we have added `toggleCompleted` to our `TodoListItemProps` we'll see that the `TodoListItem` in our `TodoList` is complaining about a missing prop. We successfully passed the function into our `TodoList`, but we aren't passing it down into `TodoListItem`. This process is often called `prop drilling` and can be a signal for refactoring (which you'll see in the final example).

```jsx
<TodoListItem key={todo.id} {...todo} toggleCompleted={toggleCompleted} />
```
