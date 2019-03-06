# Step 1.7 - Types and creating a UI-driven state (Demo)

Now that we have a UI that is purely driven by the state of our app, we need to add functionality to allow the UI to drive the state. This is often done by creating functions that call `setState` like we saw in the `TodoHeader`. Values from the state are then passed down child components as props.

> We'll be learning in part 2 of this workshop how we can expose these functions without explicitly passing them down via props.

This is our core "business logic" and handles our basic "CRUD" operations: Create, Read, Update, Delete. We don't have time to walk through writing all of those functions, but you can see that they are already provided in the demo's `TodoApp` and passed into our components.

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
  todos: any;
  complete: any;
}
```

> Note that we're using the `any` keyword for now. This won't give us any type safety, but it does let us specify valid prop names we can pass to this component.

With that interface written, we'll add it to our component class.

```ts
export class TodoList extends React.Component<TodoListProps, any>
```

> Note that the first value in `<>` is for a props interface, and the second is for state.

Now that we have a typed component, let's go back to our `TodoApp` and see what happens if we try to change the name of a prop.

## Adding type safety

So far we've only established what our prop names are, not the type of values inside of them. Let's first look at `filter` and see how we can improve that prop's type safety.

### Filter Type

We know that `filter` shouldn't be an object, array or function, so we can specify it should always be a string like this:

```ts
interface TodoListProps {
  filter: string;
  todos: any;
  complete: any;
}
```

But since we know that the filter can be only one of three values, we can make that explicit with a [union type](https://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types):

```ts
interface TodoListProps {
  filter: 'all' | 'active' | 'completed';
  todos: any;
  complete: any;
}
```

Now try going back to `TodoApp` and changing the `filter` attribute in `TodoList` to something else. You'll see an error in the editor (if using VS Code) and on the command line when you save the file.

### Complete Type

The `complete` prop isn't data, but a function. Fortunately, TypeScript can handle function types just as well as data.

```ts
interface TodoListProps {
  filter: 'all' | 'active' | 'completed';
  todos: any;
  complete: (id: string) => void;
}
```

For functions we are only concerned with the parameters passed in and the return value. You can see in the example above that the function takes in an `id` of type string and returns `void`, which means it has no returned value.

> Technically, all functions in JavaScript return `undefined` if no other return value is specified, but declaring a return type of `void` causes TypeScript to error if you try to return a value from the function (or use its default returned value of `undefined`).

## Todos Type

The `todos` prop is interesting in that `todos` is an object with a bunch of unknown keys. So here's what that interface would look like.

```ts
interface TodoListProps {
  filter: 'all' | 'active' | 'completed';
  todos: {
    [id: string]: {
      label: string;
      completed: boolean;
    };
  };
  complete: (id: string) => void;
}
```

> Note that `[id: string]` does not indicate an array; it is an object [index signature](https://www.typescriptlang.org/docs/handbook/interfaces.html#indexable-types).

Now that our interface is complete, try changing the word "all" in `filter === all` and see that VS Code will tell you this condition will always be false. Compare this to plain JavaScript: if you had a typo in that line, you wouldn't understand why your filter wasn't working.

## Sharing types

Most of our components will need to specify types for `todos` and `filter`, so it's a good thing that TypeScript allows us to share types between files. I've already written up and exported those shared types in the file `TodoApp.types.ts`, so we just need to import them and use them in our interface.

```ts
import { FilterTypes, Todos, CompleteTodo } from '../TodoApp.types';

interface TodoListProps {
  complete: CompleteTodo;
  todos: Todos;
  filter: FilterTypes;
}
```

## Writing TodoListItemProps

Jumping down to the TodoListItem, as we start to write the `TodoListItemProps` we realize that two of the props, `label` and `completed`, have already been defined in the `TodoItem` interface. So we can make `TodoListItemProps` reuse the `TodoItem` interface by extending it.

```ts
import { CompleteTodo } from '../TodoApp.types';

interface TodoListItemProps extends TodoItem {
  id: string;
  complete: CompleteTodo;
}
```

The end result of this is an interface with all four properties: `id`, `complete`, `completed` and `label`.

Next we can pull in the remaining props in the render function:

```jsx
const { label, completed, complete, id } = this.props;
```

And then use the input's `onChange` event to fire our `complete` callback. We can see in the signature that `complete` expects an `id` of type string, so we'll pass our `id` prop in.

> A [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) is a function passed into a component as a prop.

```jsx
<input type="checkbox" checked={completed} onChange={() => complete(id)} />
```

> Note that the function param and prop name just happen to be the same. This isn't required.

Now that our todos are firing the `onChange` callback, give them a click and take look at how the app responds. Since our footer text is based on the number of unchecked todos, the footer will automatically update to reflect the new state.
