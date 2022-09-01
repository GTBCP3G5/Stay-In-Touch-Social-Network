import React from 'react';
import Auth from '../utils/auth';

export default function Logout() {
  return (
    <button onClick={Auth.logout}>Logout</button>
  )
}
