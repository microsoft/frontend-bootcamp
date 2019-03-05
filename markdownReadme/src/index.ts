import marked, { Renderer } from 'marked';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);

async function run() {
  const div = document.getElementById('markdownReadme');

  // Create your custom renderer.
  const renderer = new Renderer();
  renderer.code = (code, language) => {
    // Check whether the given language is valid for highlight.js.
    const validLang = !!(language && hljs.getLanguage(language));
    // Highlight only if the language is valid.
    const highlighted = validLang ? hljs.highlight(language, code).value : code;
    // Render the highlighted code with `hljs` class.
    return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
  };
  marked.setOptions({ renderer });

  if (div) {
    const response = await fetch(div.dataset['src'] || '../README.md');
    const markdownText = await response.text();
    div.innerHTML = marked(markdownText);
    restoreScroll(div);

    div.addEventListener('scroll', evt => {
      saveScroll(div);
    });

    window.addEventListener('resize', evt => {
      saveScroll(div);
    });
  }
}

const scrollKey = `${window.location.pathname}_scrolltop`;

function saveScroll(div: HTMLElement) {
  window.localStorage.setItem(scrollKey, String(div.scrollTop));
}

function restoreScroll(div: HTMLElement) {
  const scrollTop = window.localStorage.getItem(scrollKey);
  if (scrollTop) {
    div.scrollTop = parseInt(scrollTop);
  }
}

run();
