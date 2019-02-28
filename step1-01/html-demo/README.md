# HTML Demo

HTML tags are the basis of all web applications. They give the page structure, and define the content within.

An HTML tag takes the following form:

```html
<tag class="foo" onclick="myFunction()" otherAttributes="values"> </tag>
```

HTML tags can also be nested to create a tree that we call the [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

```html
<div class="my-page">
  <h1>My Page</h1>
  <ul class="link">
    <li><a href="https://github.com/Microsoft/frontend-bootcamp"> Frontend Bootcamp </a></li>
    <li><a href="https://twitter.com/micahgodbolt"> @micahgodbolt </a></li>
    <li><a href="https://twitter.com/kenneth_chau"> @kenneth_chau</a></li>
  </ul>
</div>
```

The [HTML demo page](https://microsoft.github.io/frontend-bootcamp/step1-01/html-demo/html-demo.html) is a large collection of HTML elements that you will come across during development. The full list of elements can be found on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

To learn more about each element, click on the element names below.

## [Document Metadata](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Document_metadata)

- [`html`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html) - Root-level element
- [`head`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head) - Provides general information (metadata) about the page
- [`title`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title) - Defines document title shown in browser tab/title bar
- [`link`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) - Links to external resources (usually stylesheets)
- [`style`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style) - Inline style tag

## [Content Sectioning](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Content_sectioning)

- [`section`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) - Generic section of content
- [`header`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) - Introductory content or navigational aid
- [`footer`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) - Footer for nearest sectioning element
- [`main`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main) - Dominant content
- [`nav`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav) - Navigational aid
- [`article`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article) - Syndicated content
- [`aside`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside) - Related information
- [`h1`,`h2`,`h3`,`h4`,`h5`,`h6`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) - Section headings

## [Block Text Content](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Text_content)

- [`div`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) - Generic block level container
- [`p`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p) - Paragraph
- [`ol`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) - Ordered list (1,2,3)
- [`ul`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) - Unordered list (bullets)
- [`li`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) - List item
- [`pre`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre) - Preformatted text

## [Inline Text Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Inline_text_semantics)

- [`a`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) - Anchor element for creating links to other pages, files, programs
- [`span`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span) - Generic inline container
- [`b`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b) - Bring attention to content (usually bold)
- [`em`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em) - Stress emphasis (usually italic)
- [`i`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i) - Range of text set off from normal text (usually italic)
- [`sub`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub) - Subscript text
- [`sup`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup) - Superscript text
- [`code`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code) - Fragment of computer code (monospace)

## [Image and multimedia](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Inline_text_semantics)

- [`img`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) - Embeds image into document

## [Table Content](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Table_content)

- [`table`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) - Root table container
- [`thead`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead) - Table head container
- [`tr`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr) - Table row
- [`th`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th) - Table head cell
- [`tbody`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody) - Table body container
- [`td`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td) - Normal table cell

> We used to use tables to lay out applications. Each cell would be filled with slices of images from Photoshop or Fireworks. Rounded corners were created by elaborate table tricks

## [Forms](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Forms)

- [`form`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) - Form container
- [`label`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) - Label text for form elements
- [`select`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) - A dropdown container
- [`option`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option) - Dropdown elements
- [`input`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) - A form field to collect various types of input.
  Possible `type` values include:
  - `text`
  - `checkbox`
  - `color`
  - `date`
  - `radio`
  - `submit`

# Next Step

[CSS Demo](../css-demo)
