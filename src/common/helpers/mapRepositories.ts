import { IRepository, IMappedRepository } from "../types";

export const mapRepositories = (
  repositories: IRepository[]
): IMappedRepository[] => {
  return repositories.map((repository) => ({
    fullName: repository.full_name,
    name: repository.name,
    ownerName: repository.owner.login,
    id: repository.id,
    forks: repository.forks_count,
    stars: repository.stargazers_count,
    logo: repository.owner.avatar_url,
    description: repository.description,
    githubUrl: repository.html_url,
  }));
};
