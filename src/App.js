import React, { useState } from "react";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import { v4 as uuidv4 } from "uuid";

function App() {
  const usersData = [
    { id: uuidv4(), name: "Paco", username: "Jones" },
    { id: uuidv4(), name: "Manolo", username: "Lama" },
    { id: uuidv4(), name: "Juan", username: "Calimero" },
  ];

  //state

  const [users, setUsers] = useState(usersData);

  //add users
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  //delete users
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  //edit users
  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username: ''
  })

  const editRow = user => {
    setEditing(true)
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }

  //update users
  const updateUser = (id, updateUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <>
              <h2>Edit user</h2>
              <EditUserForm currentUser={currentUser} updateUser={updateUser}/>
            </>
          ) : (
            <>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
      </div>
    </div>
  );
}

export default App;
