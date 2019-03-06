# Step 1.2 - Introduction to CSS (Demo)

## CSS properties

Now that we've gone over adding HTML tags to the page, let's cover adding styles to those tags. We can do quite a lot with styles! We can change:

- Typography
- Colors
- Appearance (corners, borders, decorations)
- Layout
- Position
- Display format: inline vs block
- Animations
- and [many more](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

CSS styles are always written in `property: value` pairs (like `background: blue;`) and terminated with a semicolon.

## Applying CSS to an HTML file

CSS can be applied to HTML tags in three different ways.

1. Inline using an HTML tag's `style` attribute
   - `<div style="background: blue; color: white;">Hello </div>`
2. Via a `<style>` tag in the HTML page
3. Through an external CSS file
   - `<link rel="stylesheet" href="./css-demo-finished.css" />`

## Targeting specific elements

Inline styles are always applied directly to the element you place them on, but `<style>` tags and external CSS files need a way to match elements with their respective style sets. This is done with **[CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)**. When selectors are combined with CSS styles, we call this a **ruleset**.

CSS rulesets take on the following form:

```css
selector1,
selector2 {
  property1: value1;
  property2: value2;
}
```

Here's a more detailed view from [Chris Eppstein](https://twitter.com/chriseppstein/status/1100115119437111296):

<img src="https://raw.githubusercontent.com/Microsoft/frontend-bootcamp/master/assets/css-syntax.png"/>

A selector can be a single tag, class, ID, or attribute. It can also be a [combination](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors) of those elements.
