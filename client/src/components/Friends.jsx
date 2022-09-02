import React from 'react';
import { useQuery } from '@apollo/client';

import FriendsList from '../components/FriendsList';

import { QUERY_USERS } from '../utils/queries';

export default function Users() {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  return (
    <main>
      <div className="flex justify-center bg-zinc-700">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <FriendsList
              users={users}
              title="Here's the current list of users..."
            />
          )}
        </div>
      </div>
    </main>
  );
};