import { IMappedRepository } from "../../../../common/types";

export type IRepositoriesListItemProps = {
  repository: IMappedRepository;
  onRepositoryClick?: (repository: IMappedRepository) => void;
};
