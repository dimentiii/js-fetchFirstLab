async function updateUser(id, updatedData) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
  });
  const user = await response.json();
  return user;
}

console.log(updateUser(1, { name: 'New Name' }));

module.exports = updateUser;