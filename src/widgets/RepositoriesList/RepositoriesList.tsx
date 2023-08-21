import React, { FC } from "react";
import { RepositoriesListItem } from "./components/RepositoriesListItem";
import { IRepositoriesListProps } from "./types";
import Heading from "../../shared/Heading";
import styles from "./RepositoriesList.module.css";

export const RepositoriesList: FC<IRepositoriesListProps> = ({
  repositories,
  listName,
  onRepositoryClick,
}) => {
  return (
    <div className={styles["list__container"]}>
      <Heading.H2>{listName}</Heading.H2>
      <ul>
        {repositories.map((repository) => (
          <RepositoriesListItem
            key={repository.id}
            repository={repository}
            onRepositoryClick={onRepositoryClick}
          />
        ))}
      </ul>
    </div>
  );
};
