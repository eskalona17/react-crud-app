import React, { useState } from "react";
import UserTable from "./components/userTable";
import { v4 as uuidv4 } from 'uuid'

function App() {
  const usersData = [
    { id: uuidv4(), name: "Paco", username: "Jones" },
    { id: uuidv4(), name: "Manolo", username: "Lama" },
    { id: uuidv4(), name: "Juan", username: "Calimero" },
  ];

  //state

  const [users, setUsers] = useState(usersData);

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users}/>
        </div>
      </div>
    </div>
  );
}

export default App;
