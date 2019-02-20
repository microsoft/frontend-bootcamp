const app = document.getElementById('app');
const textarea = document.createElement('textarea');
textarea.setAttribute('readonly', 'true');
app.appendChild(textarea);
function log(results: string) {
  textarea.innerText += results;
}

// Some setup code for exercises
const obj1 = {
  first: 'who',
  second: 'what',
  third: 'dunno',
  left: 'why'
};

const obj2 = {
  center: 'because',
  pitcher: 'tomorrow',
  catcher: 'today'
};

function makePromise() {
  return Promise.resolve(5);
}

// Do the exercises here, output your results with "log()" function
// ...
log('hello world');

(async () => {
  // Place your code for the async / await exercise here
  // ...
})();

export default {};
