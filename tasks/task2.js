async function createUser(userData) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  const user = await response.json();
  return user;
}

console.log(createUser({ name: 'John', email: 'john@example.com' }));

module.exports = createUser;