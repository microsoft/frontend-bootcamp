async function fetchSomething() {
  const response = await fetch('http://localhost:3000/hello');
  return await response.text();
}

fetchSomething().then(text => {
  console.log('hello ' + text);
});
