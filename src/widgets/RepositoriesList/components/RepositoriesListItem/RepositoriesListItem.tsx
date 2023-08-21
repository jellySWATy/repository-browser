import React, { FC } from "react";
import { IRepositoriesListItemProps } from "./types";
import styles from "./RepositoriesListItem.module.css";
import { ItemHeader } from "./components/ItemHeader";
import { ItemMetrics } from "./components/ItemMetrics";
import { ItemFooter } from "./components/ItemFooter/ItemFooter";

export const RepositoriesListItem: FC<IRepositoriesListItemProps> = ({
  repository,
  onRepositoryClick,
}) => {
  const classes = `${styles["list__item"]} ${
    onRepositoryClick ? styles["list__item--clickable"] : ""
  }`;

  const handleRepositoryClick = () => {
    if (onRepositoryClick) {
      onRepositoryClick(repository);
    }
  };
  return (
    <li className={classes} onClick={handleRepositoryClick}>
      <ItemHeader
        logo={repository.logo}
        title={repository.fullName}
        url={repository.githubUrl}
      />
      <p className={styles["item__description"]}>{repository.description}</p>
      <ItemMetrics stars={repository.stars} forks={repository.forks} />
      <ItemFooter
        ownerName={repository.ownerName}
        repositoryName={repository.name}
      />
    </li>
  );
};
