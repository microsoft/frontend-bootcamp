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


## Next Step

[HTML Demo](./html-demo)
