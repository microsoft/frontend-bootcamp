## What We'll Be Building

![todo screenshot](https://raw.githubusercontent.com/Microsoft/frontend-bootcamp/master/assets/todo_screenshot.jpg)

## HTML and CSS

Every website, application, form or component starts with markup. The HTML will change over time as you develop, but a first pass helps you understand the UI you are trying to build.

## Demo

In this exercise we will scaffold out some HTML for our Todo app, then add some basic styling to it.

### Page scaffold

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body></body>
</html>
```

1. The DOCTYPE tells the browser that this file is written in modern HTML.
2. The HTML tag wraps the entire page, and is the page root. Nothing is placed outside of those tags. Attributes can be set on HTML.
3. Head will contain all of the page's meta data, in this case a link to our CSS file.
4. Body is where all of the visible content should be placed.

### Content Sectioning

As we saw in the previous demo, HTML elements can be used to describe different content sections of the applications. Let's add `header`, `main` and `footer`, as well as populate the header with an `h1`, addTodo div, and `nav` for our filters.

```html
<body>
  <header>
    <h1></h1>
    <div class="addTodo"></div>
    <nav class="filter"></nav>
  </header>
  <main></main>
  <footer></footer>
</body>
```

> Note that a `form` element would have been more semantic than a `div`, but we aren't using this form to POST to a server, so for this example a div is easier to use.

### Updating the header

The header of our page is where most of the action is going to happen. First, lets give our app a name, adding 'TODO' to our `h1`. Then we can add an input and button to our `addTodo` div.

```html
<input class="textfield" placeholder="add todo" /> <button class="submit">Add</button>
```

#### Navigation

The navigation for this application is quite simple. We want users to be able to switch between three filtered states. Since we need to track which state is currently selected, we'll add that as a class on the first item.

```html
<nav class="filter">
  <button class="selected">all</button>
  <button>active</button>
  <button>completed</button>
</nav>
```

### Adding styles

Now that we've got the top of our application scaffolded, we can add some styles in the head.

```html
<head>
  <link rel="stylesheet" href="./style.css" />
</head>
```

### Updating styles

It looks like the selected button isn't getting any special styles. Let's dig in and see why that is.

Open up the browser inspector and target our 'all' button. You'll notice that the blue style is present on the list, but it is being overridden by the `border: none` above it. This is a situation where specificity is winning out over the cascade.

> **Cascade** states that if two selectors are equal, the lowest one on the page wins

> **Specificity** states that regardless of cascade, the selector with the highest specificity wins

To fix this problem we need to either reduce the specificity of our button styles, or increase the specificity of the selected style. In this situation we will add `.filter` in front of the `.selected` selector, because the selected style only applies to the filter anyway.
