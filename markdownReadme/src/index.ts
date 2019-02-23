import marked from 'marked';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);

async function run() {
  const div = document.getElementById('markdownReadme');

  // // Create your custom renderer.
  // const renderer = new Renderer();
  // renderer.code = (code, language) => {
  //   // Check whether the given language is valid for highlight.js.
  //   const validLang = !!(language && highlightjs.getLanguage(language));
  //   // Highlight only if the language is valid.
  //   const highlighted = validLang ? highlightjs.highlight(language, code).value : code;
  //   // Render the highlighted code with `hljs` class.
  //   return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
  // };

  if (typeof hljs != 'undefined') {
    marked.setOptions({
      highlight: function(code, lang) {
        if (lang && hljs.getLanguage(lang)) {
          return hljs.highlight(lang, code).value;
        } else {
          return code;
        }
      }
    });
  }

  // Set the renderer to marked.
  // marked.setOptions({ renderer });

  if (div) {
    const response = await fetch('../README.md');
    const markdownText = await response.text();
    div.innerHTML = marked(markdownText, { baseUrl: '../' });
  }
}

run();
