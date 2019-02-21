## CSS Demo

### CSS Properties

Now that we've gone over adding HTML tags to the page, lets cover adding styles to those tags. We can do quite a lot with styles! We can change:

- Typography
- Colors
- Appearance (Corners, Borders, Decorations)
- Layout
- Position
- Inline vs Block
- Animations
- and [many more](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

CSS is always applied in `property: value` pairs, like `background: blue;` and are terminated with a semi colon.

### Applying CSS to an HTML file

CSS can be applied to HTML tags in three different ways.

1. Inline - Styles are applied directly to the HTML tag

- `<div style="background: blue; color: white;">Hello </div>`

2. Via a `<style>` tag in the HTML page
3. Through an externally loaded CSS file

- `<link rel="stylesheet" href="./css-demo-finished.css" />`

### Targeting specific HTML tags

Inline styles are always applied directly to the element you place them on, style tags and external CSS files need a method for matching HTML elements with their prospective style sets. We call these "selectors", and they are just as important to learn as the properties/values themselves.

```css
body {
  font: 1.2em sans-serif;
}

/* Targeting an HTML tag */
h1 {
  /* Color name */
  color: black;

  /* 6 digit hex  */
  background: #ababab;

  /* Margin: property for each side */
  margin-bottom: 15px;
  margin-top: 15px;

  /* Shorthand: Padding applies to all sides  */
  padding: 10px;

  /* 3 digit hex and border shorthand */
  border: 1px solid #ddd;
}

/* Overriding inherited styles */
span {
  color: #004578;
}

/* Targeting a class name  */
.tiles {
  display: flex;
}

/* Decendant selector */
.tiles img {
  width: 100%;
}

/* Direct decendant selector */
.tiles > div {
  /* rgb colors */
  background: rgb(10, 10, 10);
  color: white;
  flex-basis: 100%;
  /* Longhand goes clockwise from top
  10px - all
  10px 20px - top/bottom left/right
  10px 20px 15px - top left/right bottom
  */
  padding: 10px 20px 15px;
  margin: 10px 20px 10px 0;
}

/* Qualified selector */
div.links {
  background: #004578;
}

/* Style inheritance only works for unstyled elements */
a {
  color: white;
}

/* Pseudo hover selector */
a:hover {
  color: #ccc;
}

/* Sibling selectors */
a ~ a {
  /* Changing elements from inline to block */
  display: block;
}

/* Positional Pseudo Selectors  */
.tiles > div:last-child {
  /* overrides margin-right but leaves other margins alone */
  margin-right: 0;
}

/* ID selector */
#contact-form {
  display: flex;
  flex-direction: column;
}

/* Attribute selector */
input[type='submit'] {
  margin-top: 10px;
}
```
