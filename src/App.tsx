import React, { useCallback, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import UserList from './components/UserList/UserList';
import { searchUsers, getUserRepos } from './api';
import './App.css'

const App: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [repos, setRepos] = useState<{ [key: string]: any[] }>({});
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [showMessage, setShowMessage] = useState(false);

  const handleSearch = useCallback(async (username: string) => {
    try {
      const results = await searchUsers(username);
      setUsers(results);
      setShowMessage(true);
      setRepos({});
      setSelectedUser(null);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleUserClick = useCallback(async (username: string) => {
    if (repos[username]) {
      setShowMessage(selectedUser ? true : false);
      setSelectedUser(selectedUser === username ? null : username);
    } else {
      try {
        const repositories = await getUserRepos(username);
        setRepos((prevRepos) => ({
          ...prevRepos,
          [username]: repositories,
        }));
        setShowMessage(selectedUser ? true : false);
        setSelectedUser(username);
      } catch (error) {
        console.error(error);
      }
    }
  }, [repos, selectedUser]);

  return (
    <div className='app'>
      <SearchBar showMessage={showMessage} onSearch={handleSearch} />
      <UserList users={users} repos={repos} selectedUser={selectedUser} onUserClick={handleUserClick} />
    </div>
  );
};

export default App;