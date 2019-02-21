## How the Web Works

A simple web page is rendered on the screen via the following steps

> There are many sub steps in this process
> but these are the highlights

1. You instruct the browser which webpage you'd like to see
2. The browser looks up the site in a 'DNS Server'
   - This is like a big phone book for website server addresses
3. The browser asks the server to send over a specific page of the website `developer.mozilla.org/filename.html` or `developer.mozilla.org`
   - If asked for a 'root' level address, most servers will return `'root'/index.html`
4. The server sends the HTML file back to the browser
5. The browser starts to read the HTML file from the top to the bottom, \*stopping any time that additional resources are required
   - CSS stylesheets
   - JavaScript files
   - Fonts
   - Images
6. Browser makes requests for additional resources
   - Those resources might request even more files
7. Once the browser gets to the bottom of the page it can start rendering, and then load the page

![MDN Page Load](https://user-images.githubusercontent.com/1434956/53033758-9da8d580-3426-11e9-9ab8-09f42ccab9a8.png)

## HTML Demo

The [HTML demo page](http://localhost:8080/step1-00/html-demo/html-demo.html) is a large collection of HTML elements that you will come across during development. The full list of elements can be found on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

To learn more about each element, click on the elements below.

### [Document Meta Data](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Document_metadata)

- [html](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html) - Root level element
- [head](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head) - Provides general information (meta-data) about the page
- [title](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title) - Defines document title shown via browser tab
- [link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) - Links to external resource (usually stylesheets)
- [style](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style) - Inline style tag

### [Content Sectioning](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Content_sectioning)

- [section](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) - Generic section of content
- [header](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) - Introductory content or navigational aid
- [footer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) - Footer for nearest sectioning element
- [main](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main) - Dominent content
- [nav](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav) - Navigational aid
- [article](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article) - Syndicated content
- [aside](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside) - Related information
- [h1,h2,h3,h4,h5,h6](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) - Section headings

### [Block Text Content](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Text_content)

- [div](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) - A generic block level container
- [p](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p) - A paragraph
- [ol](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) - Ordered list (1,2,3)
- [ul](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) - Unordered list
- [li](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) - List item
- [pre](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre) - Preformatted text

### [Inline Text Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Inline_text_semantics)

- [a](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) - Anchor element for creating links to other pages, files, email
- [span](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span) - Generic inline container
- [b](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b) - Bring attention to content
- [em](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em) - Stress emphasis
- [i](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i) - Range of text set off from normal text
- [sub](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub) - Subscript text
- [sup](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup) - Superscript text
- [code](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code) - Fragment of computer code (monospace)

### [Image and multimedia](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Inline_text_semantics)

- [img](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) - Embeds image into document

### [Table Content](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Table_content)

- [table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) - Root table container
- [thead](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead) - Table head container
- [tr](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr) - Table row
- [th](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th) - Table head cell
- [tbody](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody) - Table body container
- [td](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td) - Normal table cell

### [Forms](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Forms)

- [form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) - Form container
- [label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) - Label text for form elements
- [select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) - A dropdown container
- [option](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option) - Dropdown elements
- [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) - A form field to collect various inputs. Types include:
  - text
  - checkbox
  - color
  - date
  - radio
  - submit
