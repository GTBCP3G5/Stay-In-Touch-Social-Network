import React from 'react';

export default function UsersList({ users, title }) {
  const normalKanit = {
    fontFamily: "'Kanit', sans-serif",
    fontWeight: "300",
  };

  const boldKanit = {
    fontFamily: "'Kanit', sans-serif",
    fontWeight: "400",
    fontSize: "20px",
  };

  
  if (!users.length) {
    return <h3>No Users Yet</h3>;
  }

  return (
    <div className="">
      <h3 style={boldKanit} className="text-green-400">{title}</h3>
      <div style={normalKanit} className="flex-row justify-space-between my-4">
        {users &&
          users.map((user) => (
            <div key={user._id} className="w-100">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-green-400 p-2 m-0">
                  {user.username}
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};