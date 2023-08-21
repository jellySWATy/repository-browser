import { makeAutoObservable } from "mobx";
import { IMappedRepository, IRepositoryResponse } from "../../types";
import { mapRepositories } from "../../helpers";

class RepositoriesStore {
  repositories: IMappedRepository[] = [];
  loading: boolean = false;
  error: null | string = null;
  favorites: IMappedRepository[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchRepositories = async (searchQuery: string) => {
    if (!searchQuery) return;
    try {
      this.loading = true;
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${searchQuery}`
      );
      const data: IRepositoryResponse = await response.json();
      console.log(data);
      this.repositories = mapRepositories(data.items);
    } catch (e: any) {
      this.error = e.message;
    } finally {
      this.loading = false;
    }
  };

  addFavorite = (repository: IMappedRepository) => {
    if (!this.favorites.find((item) => item.id === repository.id)) {
      this.favorites.push(repository);
    }
  };
}

export const store = new RepositoriesStore();
