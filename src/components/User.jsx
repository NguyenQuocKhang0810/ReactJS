import React from "react";
import "../styles/user.css";

const User = () => {
  const users = [
    {
      id: 1,
      name: "Khang",
      hobbies: [
        { id: 1, name: "Football" },
        { id: 2, name: "Music" },
      ],
    },
    {
      id: 2,
      name: "Tiến",
      hobbies: [
        { id: 1, name: "ThisAV" },
        { id: 2, name: "Reading" },
      ],
    },
  ];

  return users.map((user) => (
    <div key={user.id}>
      <h3>{user.name}</h3>
      <ul>
        {user.hobbies.map((hobby) => (
          <li key={hobby.id}>{hobby.name}</li>
        ))}
      </ul>
    </div>
  ));
};

export default User;
