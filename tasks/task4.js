async function deleteUser(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'DELETE'
  });
  return response;
}

console.log(deleteUser(1));

module.exports = deleteUser;