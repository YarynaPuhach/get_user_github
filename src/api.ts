const GITHUB_API_URL = 'https://api.github.com';

export const searchUsers = async (query: string) => {
  const response = await fetch(`${GITHUB_API_URL}/search/users?q=${query}&per_page=5`);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  const data = await response.json();
  return data.items;
};

export const getUserRepos = async (username: string) => {
  const response = await fetch(`${GITHUB_API_URL}/users/${username}/repos`);
  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }
  const data = await response.json();
  return data;
};