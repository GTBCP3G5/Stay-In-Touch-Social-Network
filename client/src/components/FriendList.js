import React from "react";

export default function FriendList({ friends, title }) {
  const boldKanit = {
    fontFamily: "'Kanit', sans-serif",
    fontWeight: "400",
    fontSize: "20px",
  };

  const normalKanit = {
    fontFamily: "'Kanit', sans-serif",
    fontWeight: "200",
  };

  console.log(friends.length);
  if (!friends.length) {
    return <h2>You haven't added any friends to your list</h2>;
  }

  return (
    <div className="w-75">
      <h2 style={boldKanit} className="text-sky-500">
        {title}
      </h2>
      {friends &&
        friends.map((friend) => (
          <div key={friend._id} className="card mb-3 bg-zinc-200">
            <h4
              style={boldKanit}
              className="p-2 m-0 bg-zinc-800 text-green-400 flex justify-between"
            >
              {friend.username}
              <span style={{ fontSize: "75%" }}>{friend.email}</span>
            </h4>
            <div className="m-3 text-zinc-800">
              <p style={normalKanit}>{friend.github}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
