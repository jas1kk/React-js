import React from "react";

// Компонент для отображения отдельного пользователя
function User(props) {
  const { name, statusText, avatar, networkStatus } = props;

  return (
    <div>
      <img src={avatar} alt={name} />
      <div>{name}</div>
      <div>{statusText}</div>
      <div>{networkStatus}</div>
    </div>
  );
}

// Компонент для отображения всех пользователей
function Users(props) {
  const { users } = props;

  return (
    <div>
      {users.map((user) => (
        <User
          key={user.id} // Ключ необходим для оптимизации отображения
          name={user.name}
          statusText={user.statusText}
          avatar={user.avatar}
          networkStatus={user.networkStatus}
        />
      ))}
    </div>
  );
}

// Главный компонент, содержащий массив пользователей
function App() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      statusText: "Hello, world!",
      avatar: "https://example.com/avatar1.jpg",
      networkStatus: "Online",
    },
    {
      id: 2,
      name: "Jane Smith",
      statusText: "I'm happy to be here.",
      avatar: "https://example.com/avatar2.jpg",
      networkStatus: "Offline",
    },
  ];

  return <Users users={users} />;
}

export default App;
