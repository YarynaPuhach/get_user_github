
export interface SimpleGitHubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  type: string;
  followers_url: string;
  following_url: string;
  repos_url: string;
}
export interface SimpleGitHubRepo {
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
