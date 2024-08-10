import React from 'react';
import './RepoList.css';

interface RepoListProps {
  repos: any[];
}

const RepoList: React.FC<RepoListProps> = React.memo(({ repos }) => {
  return (
    <div className='repos_container'>
      {!repos.length && <p>User don't have repos</p>}
    {
      repos.map(repo => (
        <div key={repo.id} className='repo_item'>
          <div className='repo_info'>
            <h3>{repo.name} </h3>
            <p> {repo.description} </p>
          </div>        
          <span>{repo.stargazers_count}★</span>
      </div>
      ))
    }
    </div>
  );
});

export default RepoList;