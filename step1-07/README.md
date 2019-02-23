# Creating a UI Driven State

Now that we have a UI that is purely driven by the state of our app, we need to add functionality to allow the UI to drive the state. This is often done by creating functions that call `setState` like we saw in the `todoHeader`, that are passed down to the UI as props.

> We'll be learning in part 2 of this workshop how we can expose these functions without explicitly passing them down via props

This is our core 'business logic' and handles everything our basic 'CRUD' operations of "Create, Read, Update, Delete". We don't have time to walk through writing all of those functions, but you can see that they are already provided in the demo's `TodoApp.tsx`.

## Intro to Typescript

Taking a look at our components in `TodoApp` you can see that our list of props is not just getting longer, but is getting much more complex! We're passing through functions with various signatures, complex `todos` objects as well as filter strings which are always one of three values.

As applications grow, it becomes increasing difficult to remember what each function does, or what each todo contains. Also, as JavaScript is a loosly type language, if I wanted to change the value of `todos` to an array inside my `TodoList`, javascript wouldn't care. But if `TodoListItems` was expecting an object, our application would break.

It is because of these two reasons that the entire industry is shifting to writing applications that are strongly typed, and are using Typescript to accomplish that.

As [their website](https://www.typescriptlang.org/) state:

> Typescript is a superset of JavaScript that compiles to plain JavaScript

If you've ever used [Sass](https://sass-lang.com/) you are familiar with this concept. In the same say that all valid CSS is valid Sass, all valid JavaScript is valid Typescript. That's why most of this project has been writting in `ts` and `tsx` files instead of `js` and `jsx` files.

Let's dive into the demo and see how Typescript can help us better understand our component props, and guard against future regressions.

## Demo

Let's start off in the TodoList, as that has the most data flow, up and down.

Looking at our `TodoApp` we know that `TodoList` has three props, `filter`, `todos`, and `filter`. We'll start by creating and interface that represents this component's props called `TodoListProps`.

```tsx
interface TodoListProps {
  filter: any;
  todos: any;
  complete: any;
}
```

> Note that we're using the `any` keyword for now. This won't give us any type safety, but it does innumerate the valid props we can pass to this component.

With that interface written, we'll add it to our component class.

```tsx
export class TodoList extends React.Component<TodoListProps, any>
```

> Note that the first value in `<>` is for a props interface, and the second for state

Now that we have a typed component, let's go back to our `TodoApp` and see what happens if we try to change the name of a prop.

### Adding type safety

So far we've only established what our prop names are, not the values inside of them. Let's first look at `filter`, and see how we can improve that prop's type safety.

#### Filter Type

We know that filter shouldn't be an object, array or function, so we can specify it should always be a string like this:

```tsx
interface TodoListProps {
  filter: string;
  todos: any;
  complete: any;
}
```

But since we know that the filter can be only one of three values, we can explicitly write it that way with [union types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types):

```tsx
interface TodoListProps {
  filter: 'all' | 'active' | 'completed';
  todos: any;
  complete: any;
}
```

Now try going back to `TodoApp` and changing the `filter` attribute in `TodoList` to something else.

#### Complete Type

The `complete` props isn't data, but rather a function. Fortunatly, Typescript can handle function types just as well as data.

```tsx
interface TodoListProps {
  filter: 'all' | 'active' | 'completed';
  todos: any;
  complete: (id: string) => void;
}
```

For functions we are only concerned with the parameters passed in and the return value. You can see in the example above that the function takes in an `id` of type string, and returns `void`, which means it has no return.

### Todos Type

The `todos` prop is interesting in that `todos` is an object with a bunch of unknown keys. So here's what that interface would look like.

```tsx
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

> Note that the `[]` notation does not mean an array, it is a [computed property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names) notation.

## app

Add Types to TodoApp
change 'filter' state value to demonstrate

## List (open list next to app)

Demo TodoApp.types
Add Types in List

## App

Back to App, add complete={this.\_complete} to Todolist - show types, change complete to 'false', filter

## List

add complete, pass to item (prop drilling)

## List Item (move List Item into App window)

TodoListItemProps, extend, id, complete (possible abstraction)
add props, add complete to List item

## List

Demo how you can't add random things to TodoListItem or item's this.props now

exercise

Add types to footer
Add onClick to button
Add types to header
Add setFilter to filter buttons
write onAdd function
place onAdd to submit button
