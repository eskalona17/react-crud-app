import React, { useState } from "react";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import { v4 as uuidv4 } from 'uuid'

function App() {
  const usersData = [
    { id: uuidv4(), name: "Paco", username: "Jones" },
    { id: uuidv4(), name: "Manolo", username: "Lama" },
    { id: uuidv4(), name: "Juan", username: "Calimero" },
  ];

  //state

  const [users, setUsers] = useState(usersData);

  //add users
  const addUser = user => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //detele users
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser}/>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  );
}

export default App;
