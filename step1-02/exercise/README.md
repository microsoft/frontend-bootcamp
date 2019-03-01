## Exercise

If you don't already have the app running, start it with `npm run static` from the root of the `frontend-bootcamp` folded and go to [Todo HTML/CSS Exercise Page](http://localhost:8080/step1-02/exercise/)

Open the `index.html` file in this exercise folder.

1. Add an unordered list with class `todos` to the main section
2. Add 4 `list items` (`li`) with class `todo` inside of that list with the following content
3. Add this content to each of the 4 list items `<label><input type="checkbox" /> <span class="title"> Todo </span> </label>`
4. Add a span and a button to your `footer`
5. Span content should be `<i class="remaining">4</i> items left` and button should say `Clear Completed` and have a class of `submit`
6. Go into the CSS file and add `display: flex` to the footer. Also add `flex-grow:1` to the span inside of the footer

> Hint: Look back at the CSS demo to see the various ways you can use selectors to target existing HTML

> There are many strategies for creating and organizing class names in a large application, like [bem](http://getbem.com/), [OOCSS](http://oocss.org/) and [SMACSS](https://smacss.com/). This lesson is focused on using CSS selectors, not the optimized way to scale your CSS.
