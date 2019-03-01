# Frontend Bootcamp / Days in the Web

> 🚨🚨 This project is a work in progress! Issues and pull requests are encouraged. 🚨🚨

## Welcome

In this two-day workshop you'll learn the basics of frontend development while building a working web app.

The first day provides an introduction to the fundamentals of the web: HTML, CSS and JavaScript. This is targeted at new and experienced developers alike. On the second day we'll dive into more advanced topics like TypeScript, testing, and state management. While the examples should be accessible to anyone, you'll get the most out of it if you have some prior experience with programming and web technologies.

## Getting set up

### 1. Required software

Before starting, make sure your computer has the following installed:

- [Node/NPM](https://nodejs.org/en/) (choose the **LTS** option)
- [Git](https://git-scm.com/downloads)
- [Visual Studio Code](https://code.visualstudio.com)
  - If using a Mac, also follow [these steps](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) to install the `code` terminal command.
- React Developer Tools for [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

### 2. Installing and opening the project

- Open VS Code and then press `ctrl + ~` to open the built in terminal
- Use the `cd` (change directory) command to find an appropriate place for your code 
- Type `git clone https://github.com/Microsoft/frontend-bootcamp.git` into the terminal, this will pull down a copy of the workshop code
- Type `cd bootcamp` to change your current directory to the bootcamp folder
- Type `npm install` to install of the project dependencies
- Type `code ./` to open the bootcamp code in VS Code
> If on a Mac, be sure you've followed [these steps](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) first to make the `code` command available.

### 3. Run the "inner loop" build

Now that we have VS Code open with the bootcamp code, open the terminal again `ctrl + ~` and your project should look like this

<img src="https://user-images.githubusercontent.com/1434956/53654442-9c379400-3c02-11e9-8768-d19e092b606d.png" width=500 />

To run the dev "inner loop" for the first 3 lessons type:
```
npm run static
```

When we get to lesson 4, and React we will stop the static inner loop and start:
1. press `ctrl + c` to stop the static inner loop

```
npm run start
```

Both of these above commands will load the following site:

<img src="https://user-images.githubusercontent.com/1434956/53656239-88426100-3c07-11e9-8456-e3d958aa4def.png" width=500 />

## Course material

### Day one

Day one is going to cover the basics of HTML, CSS and JavaScript, as well as an introduction to React and Typescript.

The format of this day is the following:

1. I will walk through some demo code to teach some core concepts about the topic. Don't worry about writing code at this point. Just follow along via the readme's listed below.
2. In the excercise portion return to VS Code and open the 'demo' folder for the given exercise. 

1. [Introduction to HTML, CSS and JavaScript](step1-01)
   - [HTML Demo](step1-01/html-demo)
   - [CSS Demo](step1-01/css-demo)
   - [JavaScript Demo](step1-01/js-demo)
2. [Writing a Todo App: HTML and CSS](step1-02)
   - [Demo](step1-02/demo)
   - [Exercise](step1-02/exercise)
3. [Writing a Todo App: JavaScript](step1-03)
   - [Demo](step1-03/demo)
   - [Exercise](step1-03/exercise)
4. [React Introduction](step1-04)
   - [Demo](step1-04/demo)
5. [Building a Static Page](step1-05)
   - [Demo](step1-05/demo)
   - [Exercise](step1-05/exercise)
6. [State Driven UI](step1-06)
   - [Demo](step1-06/demo)
   - [Exercise](step1-06/exercise)
7. [Types & UI Driven State](step1-07)
   - [Demo](step1-07/demo)
   - [Exercise](step1-07/exercise)

### Day two

The demos and exercises for today are combined.

1. [Introduction to TypeScript](step2-01)
2. [UI Fabric Component Library](step2-02)
3. [Theming and Styling](step2-03)
4. [Testing with Jest](step2-04)
5. [Redux: Reducers](step2-05)
6. [Redux: Dispatching Actions and Examining State](step2-06)
7. [Redux: Stores and Dispatch](step2-07)
8. [Redux: Combining Reducers](step2-08)
9. [Redux: Thunk Middleware](step2-09)

### Additional resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [React Docs](https://reactjs.org/docs/getting-started.html)
- [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

### Follow the authors!

If you are interested in JavaScript, TypeScript, React, Redux, or Design Systems, follow us on Twitter:

- [@kenneth_chau](https://twitter.com/kenneth_chau)
- [@micahgodbolt](https://twitter.com/micahgodbolt)

### Other projects from the UI Fabric team at Microsoft

- [UI Fabric](https://developer.microsoft.com/en-us/fabric) - [github repo](https://github.com/officedev/office-ui-fabric-react)
- [Just](https://microsoft.github.io/just): The task library that just works - [github repo](https://github.com/Microsoft/just)
- [Rush](https://rushjs.io): A scalable monorepo manager for the web - [github repo](https://github.com/Microsoft/web-build-tools/)

## Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Legal notices

Microsoft and any contributors grant you a license to the Microsoft documentation and other content
in this repository under the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/legalcode),
see the [LICENSE](LICENSE) file, and grant you a license to any code in the repository under the [MIT License](https://opensource.org/licenses/MIT), see the
[LICENSE-CODE](LICENSE-CODE) file.

Microsoft, Windows, Microsoft Azure and/or other Microsoft products and services referenced in the documentation
may be either trademarks or registered trademarks of Microsoft in the United States and/or other countries.
The licenses for this project do not grant you rights to use any Microsoft names, logos, or trademarks.
Microsoft's general trademark guidelines can be found at http://go.microsoft.com/fwlink/?LinkID=254653.

Privacy information can be found at https://privacy.microsoft.com/en-us/

Microsoft and any contributors reserve all other rights, whether under their respective copyrights, patents,
or trademarks, whether by implication, estoppel or otherwise.
