import React from 'react';
import RepoList from '../RepoList/RepoList';
import './UserList.css';
import { SimpleGitHubUser, SimpleGitHubRepo } from '../../types';

interface UserListProps {
  users: SimpleGitHubUser[];
  repos: { [key: string]: SimpleGitHubRepo[] };
  selectedUser: string | null;
  onUserClick: (username: string) => void;
}

const UserList: React.FC<UserListProps> = React.memo(({ users, repos, selectedUser, onUserClick }) => {
  return (
    <div className='users__container'>
      {users.map((user) => (
        <div key={user.id} className='user_container'>
          <div
            className='user_item'
            onClick={() => onUserClick(user.login)}
            aria-expanded={selectedUser === user.login}
          >
            <p>{user.login}</p>
            <p>{selectedUser === user.login ? ' ▲' : ' ▼'}</p>
          </div>

          {selectedUser === user.login && repos[user.login] && (
            <RepoList repos={repos[user.login]} />
          )}
        </div>
      ))}
    </div>
  );
});

export default UserList;