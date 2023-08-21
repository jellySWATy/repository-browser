export type IRepository = {
  forks_count: number;
  full_name: string;
  name: string;
  description: string;
  id: number;
  owner: {
    avatar_url: string;
    login: string;
  };
  stargazers_count: number;
  html_url: string;
};

export type IRepositoryResponse = {
  items: IRepository[];
};

export type IMappedRepository = {
  fullName: string;
  name: string;
  ownerName: string;
  id: number;
  forks: number;
  stars: number;
  logo: string;
  description: string;
  githubUrl: string;
};
