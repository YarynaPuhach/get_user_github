import React, { useCallback, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import UserList from './components/UserList/UserList';
import { searchUsers, getUserRepos } from './api';
import './App.css'
import Loader from './components/Loader/Loader';

interface SimpleGitHubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  type: string;
  followers_url: string;
  following_url: string;
  repos_url: string;
}
interface SimpleGitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  created_at: string;
  updated_at: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const App: React.FC = () => {
  const [users, setUsers] = useState<SimpleGitHubUser[]>([]);
  const [repos, setRepos] = useState<{ [key: string]: SimpleGitHubRepo[] }>({});
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(async (username: string) => {
    try {
      setLoading(true);
      const results: SimpleGitHubUser[] = await searchUsers(username);
      setUsers(results);
      setShowMessage(true);
      setRepos({});
      setSelectedUser(null);
      setLoading(false);
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
        setLoading(true);
        const repositories: SimpleGitHubRepo[] = await getUserRepos(username);
        setRepos((prevRepos) => ({
          ...prevRepos,
          [username]: repositories,
        }));
        setShowMessage(selectedUser ? true : false);
        setSelectedUser(username);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
  }, [repos, selectedUser]);

  return (
    <div className='app'>
      <SearchBar showMessage={showMessage} onSearch={handleSearch} />
      {loading ? <Loader /> : <UserList users={users} repos={repos} selectedUser={selectedUser} onUserClick={handleUserClick} />}
    </div>
  );
};

export default App;