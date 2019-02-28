async function fetchSomething() {
  const response = await fetch('http://localhost:3000/hello');
  return await response.text();
}

// Async functions always return a Promise
fetchSomething().then(text => {
  console.log('hello ' + text);
});

// adding an export turns this into a "module"
export default {};
