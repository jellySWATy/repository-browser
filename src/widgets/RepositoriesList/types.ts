import { IMappedRepository } from "../../common/types";

export type IRepositoriesListProps = {
  repositories: IMappedRepository[];
  listName: string;
  onRepositoryClick?: (repository: IMappedRepository) => void;
};
