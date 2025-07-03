

const users = [
  { id: 1, name: "Ram", age: 25 },
  { id: 2, name: "Sita", age: 23 },
  { id: 3, name: "Lakshman", age: 24 },
];

function UsersList() {
  console.log(users)
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>Name: {user.name}</h3>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  );
}
export default UsersList
